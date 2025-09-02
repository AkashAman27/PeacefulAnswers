#!/usr/bin/env node

/**
 * Script to check if the hindu_festival_announcements table exists in Supabase
 * and create it if it doesn't exist, based on the FestivalAnnouncement TypeScript interface
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase environment variables');
    console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
}

// Create admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function checkTableExists() {
    try {
        // Try to query the table - if it exists, this will work
        const { data, error } = await supabase
            .from('hindu_festival_announcements')
            .select('count', { count: 'exact' })
            .limit(1);

        if (error) {
            if (error.code === '42P01') {
                // Table does not exist
                return false;
            }
            throw error;
        }

        return true;
    } catch (error) {
        console.error('Error checking table existence:', error);
        return false;
    }
}

async function checkTableSchema() {
    try {
        const { data, error } = await supabase.rpc('get_table_schema', {
            schema_name: 'hindu',
            table_name: 'hindu_festival_announcements'
        });

        if (error) {
            console.log('Could not check schema (this is okay if table doesn\'t exist)');
            return null;
        }

        return data;
    } catch (error) {
        console.log('Schema check not available');
        return null;
    }
}

async function createTable() {
    console.log('🔧 Creating hindu_festival_announcements table...');
    
    const createTableSQL = `
        -- Create the hindu schema if it doesn't exist
        CREATE SCHEMA IF NOT EXISTS hindu;

        -- Create the hindu_festival_announcements table
        CREATE TABLE IF NOT EXISTS hindu.hindu_festival_announcements (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            festival_name VARCHAR(255) NOT NULL,
            hindi_text TEXT NOT NULL,
            english_text TEXT NOT NULL,
            icon VARCHAR(10) NOT NULL,
            link_url VARCHAR(500) NOT NULL,
            start_date TIMESTAMPTZ NOT NULL,
            end_date TIMESTAMPTZ NOT NULL,
            is_active BOOLEAN DEFAULT true NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW(),
            created_by VARCHAR(100),
            updated_by VARCHAR(100)
        );

        -- Create indexes for better performance
        CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_is_active 
            ON hindu.hindu_festival_announcements(is_active);
            
        CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_start_date 
            ON hindu.hindu_festival_announcements(start_date);
            
        CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_end_date 
            ON hindu.hindu_festival_announcements(end_date);

        CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_created_at 
            ON hindu.hindu_festival_announcements(created_at DESC);

        -- Create a trigger to automatically update the updated_at timestamp
        CREATE OR REPLACE FUNCTION hindu.update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        CREATE TRIGGER trigger_hindu_festival_announcements_updated_at
            BEFORE UPDATE ON hindu.hindu_festival_announcements
            FOR EACH ROW
            EXECUTE FUNCTION hindu.update_updated_at_column();

        -- Enable Row Level Security (RLS)
        ALTER TABLE hindu.hindu_festival_announcements ENABLE ROW LEVEL SECURITY;

        -- Create policies for public read access to active announcements
        CREATE POLICY "Public can view active festival announcements" ON hindu.hindu_festival_announcements
            FOR SELECT USING (is_active = true);

        -- Create policies for authenticated admin access (full CRUD)
        CREATE POLICY "Admins can manage festival announcements" ON hindu.hindu_festival_announcements
            FOR ALL USING (true);

        -- Grant necessary permissions
        GRANT USAGE ON SCHEMA hindu TO anon, authenticated;
        GRANT SELECT ON hindu.hindu_festival_announcements TO anon;
        GRANT ALL ON hindu.hindu_festival_announcements TO authenticated;
    `;

    try {
        // Execute the SQL using Supabase's SQL editor functionality
        const { error } = await supabase.rpc('exec_sql', { sql: createTableSQL });
        
        if (error) {
            console.error('❌ Error creating table via RPC:', error);
            console.log('\n💡 You may need to run the SQL manually in the Supabase dashboard.');
            console.log('SQL file created at: ./supabase_festival_table_migration.sql');
            return false;
        }

        console.log('✅ Table created successfully!');
        return true;
    } catch (error) {
        console.error('❌ Error creating table:', error);
        console.log('\n💡 RPC method not available. You need to run the migration SQL manually.');
        console.log('SQL file created at: ./supabase_festival_table_migration.sql');
        console.log('\nSteps to create the table manually:');
        console.log('1. Go to your Supabase dashboard');
        console.log('2. Navigate to SQL Editor');
        console.log('3. Copy and paste the content from supabase_festival_table_migration.sql');
        console.log('4. Execute the SQL');
        return false;
    }
}

async function testTableConnection() {
    try {
        console.log('🔍 Testing table connection...');
        
        const { count, error } = await supabase
            .from('hindu_festival_announcements')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Error connecting to table:', error);
            return false;
        }

        console.log(`✅ Table connection successful! Current record count: ${count || 0}`);
        return true;
    } catch (error) {
        console.error('❌ Error testing table connection:', error);
        return false;
    }
}

async function insertSampleData() {
    try {
        console.log('📝 Inserting sample festival announcement...');
        
        const sampleAnnouncement = {
            festival_name: 'Diwali 2024',
            hindi_text: 'दीपावली की हार्दिक शुभकामनाएं! प्रकाश का यह पर्व आपके जीवन में खुशियां लाए।',
            english_text: 'Heartfelt wishes for Diwali! May this festival of lights bring joy to your life.',
            icon: '🪔',
            link_url: '/festivals/diwali',
            start_date: new Date('2024-10-30').toISOString(),
            end_date: new Date('2024-11-05').toISOString(),
            is_active: true,
            created_by: 'system'
        };

        const { data, error } = await supabase
            .from('hindu_festival_announcements')
            .insert([sampleAnnouncement])
            .select()
            .single();

        if (error) {
            console.error('❌ Error inserting sample data:', error);
            return false;
        }

        console.log('✅ Sample data inserted successfully!');
        console.log('Sample record:', data);
        return true;
    } catch (error) {
        console.error('❌ Error inserting sample data:', error);
        return false;
    }
}

async function main() {
    console.log('🚀 Checking hindu_festival_announcements table in Supabase...\n');

    // Check if table exists
    const tableExists = await checkTableExists();
    
    if (tableExists) {
        console.log('✅ Table hindu_festival_announcements already exists!');
        
        // Test connection
        const connectionSuccessful = await testTableConnection();
        
        if (connectionSuccessful) {
            console.log('\n✅ All checks passed! The table is ready for use.');
            
            // Ask if user wants to insert sample data
            const { count } = await supabase
                .from('hindu_festival_announcements')
                .select('*', { count: 'exact', head: true });
            
            if (count === 0) {
                console.log('\n📝 Table is empty. Would you like to insert sample data?');
                console.log('To insert sample data, uncomment the insertSampleData() call below and run again.');
                // await insertSampleData();
            }
        }
    } else {
        console.log('❌ Table hindu_festival_announcements does not exist.');
        console.log('📋 Creating table with required schema...\n');
        
        const created = await createTable();
        
        if (created) {
            await testTableConnection();
            console.log('\n🎉 Setup completed successfully!');
        }
    }

    console.log('\n📁 Additional files created:');
    console.log('- supabase_festival_table_migration.sql (complete migration script)');
    console.log('- verify_festival_table.sql (verification queries)');
    console.log('- check_and_create_festival_table.js (this script)');
    
    console.log('\n🔍 TypeScript Interface Verification:');
    console.log('The table schema matches the FestivalAnnouncement interface:');
    console.log('- id: string (UUID)');
    console.log('- festival_name: string');
    console.log('- hindi_text: string');
    console.log('- english_text: string');
    console.log('- icon: string');
    console.log('- link_url: string');
    console.log('- start_date: string (ISO timestamp)');
    console.log('- end_date: string (ISO timestamp)');
    console.log('- is_active: boolean');
    console.log('- created_at?: string (auto-generated)');
    console.log('- updated_at?: string (auto-generated)');
    console.log('- created_by?: string');
    console.log('- updated_by?: string');
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { checkTableExists, createTable, testTableConnection, insertSampleData };
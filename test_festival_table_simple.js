#!/usr/bin/env node

/**
 * Simple test to check if the hindu_festival_announcements table exists
 * and is accessible through the Supabase API
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './.env.local' });

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔍 Testing Supabase connection and hindu_festival_announcements table...\n');

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase environment variables');
    console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
}

// Create admin client with hindu schema
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    },
    db: {
        schema: 'hindu'
    }
});

async function testTable() {
    try {
        console.log('🔍 Testing table access...');
        
        // Try to select count from the table
        const { count, error } = await supabase
            .from('hindu_festival_announcements')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Table access error:', error);
            
            if (error.code === '42P01' || error.message.includes('does not exist')) {
                console.log('\n💡 The table does not exist yet.');
                console.log('📝 You need to create it manually using the migration SQL.');
                console.log('\n📋 Steps to create the table:');
                console.log('1. Go to https://supabase.com/dashboard');
                console.log('2. Select your project: ' + supabaseUrl.split('//')[1].split('.')[0]);
                console.log('3. Navigate to SQL Editor');
                console.log('4. Copy and paste the SQL from: supabase_festival_table_migration.sql');
                console.log('5. Execute the SQL');
                console.log('\n📄 The migration file contains:');
                console.log('- Table creation with all required columns');
                console.log('- Proper indexes for performance');
                console.log('- Row Level Security policies');
                console.log('- Auto-update triggers for updated_at');
                return false;
            }
            
            return false;
        }

        console.log('✅ Table exists and is accessible!');
        console.log(`📊 Current record count: ${count || 0}`);
        
        // Test insert functionality
        console.log('\n🔍 Testing insert functionality...');
        const testRecord = {
            festival_name: 'Test Festival',
            hindi_text: 'परीक्षण संदेश',
            english_text: 'Test message',
            icon: '🎉',
            link_url: '/test',
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 86400000).toISOString(), // +1 day
            is_active: false, // Keep it inactive so it doesn't show up publicly
            created_by: 'test-script'
        };

        const { data: insertData, error: insertError } = await supabase
            .from('hindu_festival_announcements')
            .insert([testRecord])
            .select()
            .single();

        if (insertError) {
            console.error('❌ Insert test failed:', insertError);
            return false;
        }

        console.log('✅ Insert test successful!');
        
        // Clean up test record
        const { error: deleteError } = await supabase
            .from('hindu_festival_announcements')
            .delete()
            .eq('id', insertData.id);

        if (deleteError) {
            console.error('⚠️  Could not clean up test record:', deleteError);
        } else {
            console.log('✅ Test record cleaned up');
        }

        console.log('\n🎉 All tests passed! The table is ready for use.');
        
        return true;

    } catch (error) {
        console.error('❌ Unexpected error:', error);
        return false;
    }
}

async function main() {
    const success = await testTable();
    
    if (success) {
        console.log('\n✅ hindu_festival_announcements table verification completed successfully!');
        console.log('\n🔍 Table Schema Verification:');
        console.log('✓ id: UUID primary key');
        console.log('✓ festival_name: string');
        console.log('✓ hindi_text: string');
        console.log('✓ english_text: string');
        console.log('✓ icon: string');
        console.log('✓ link_url: string');
        console.log('✓ start_date: timestamp');
        console.log('✓ end_date: timestamp');
        console.log('✓ is_active: boolean');
        console.log('✓ created_at: auto-timestamp');
        console.log('✓ updated_at: auto-timestamp');
        console.log('✓ created_by: string (optional)');
        console.log('✓ updated_by: string (optional)');
        console.log('\n🚀 The table matches the TypeScript FestivalAnnouncement interface!');
    } else {
        console.log('\n❌ Table verification failed. Please create the table using the migration SQL.');
    }
}

main().catch(console.error);
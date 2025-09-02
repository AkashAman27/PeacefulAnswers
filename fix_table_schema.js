#!/usr/bin/env node

/**
 * Script to fix the hindu_festival_announcements table schema
 * by adding missing created_by and updated_by columns
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    },
    db: {
        schema: 'hindu'
    }
});

async function testCurrentSchema() {
    try {
        console.log('🔍 Testing current table schema...\n');
        
        // Test insert with all required fields
        const testRecord = {
            festival_name: 'Schema Test',
            hindi_text: 'स्कीमा परीक्षण',
            english_text: 'Schema test',
            icon: '🧪',
            link_url: '/test-schema',
            start_date: new Date().toISOString(),
            end_date: new Date().toISOString(),
            is_active: false,
            created_by: 'test-script',
            updated_by: 'test-script'
        };

        const { data, error } = await supabase
            .from('hindu_festival_announcements')
            .insert([testRecord])
            .select()
            .single();

        if (error) {
            if (error.message.includes('created_by') || error.message.includes('updated_by')) {
                console.log('❌ Missing columns detected: created_by and/or updated_by');
                return false;
            } else {
                console.error('❌ Other schema issue:', error);
                return false;
            }
        }

        console.log('✅ Schema test passed! All columns are present.');
        
        // Clean up test record
        await supabase
            .from('hindu_festival_announcements')
            .delete()
            .eq('id', data.id);
        
        return true;

    } catch (error) {
        console.error('❌ Schema test error:', error);
        return false;
    }
}

async function addMissingColumns() {
    console.log('🔧 Attempting to add missing columns...\n');
    
    try {
        // Since we can't execute raw SQL directly, we'll provide instructions
        console.log('ℹ️  Cannot execute ALTER TABLE directly via Supabase client.');
        console.log('📋 Please run the following SQL manually in Supabase Dashboard:\n');
        
        console.log('-- Add missing columns to hindu_festival_announcements table');
        console.log('ALTER TABLE hindu.hindu_festival_announcements');
        console.log('ADD COLUMN IF NOT EXISTS created_by VARCHAR(100);');
        console.log('');
        console.log('ALTER TABLE hindu.hindu_festival_announcements');
        console.log('ADD COLUMN IF NOT EXISTS updated_by VARCHAR(100);');
        console.log('');
        
        console.log('📝 Steps to execute:');
        console.log('1. Go to https://supabase.com/dashboard');
        console.log('2. Select your project');
        console.log('3. Navigate to SQL Editor');
        console.log('4. Copy and paste the SQL commands above');
        console.log('5. Execute the SQL');
        console.log('6. Run this script again to verify');
        
        return false;
        
    } catch (error) {
        console.error('❌ Error adding columns:', error);
        return false;
    }
}

async function verifyCompleteSchema() {
    try {
        console.log('\n🔍 Verifying complete schema compliance...\n');
        
        // Test with a complete record matching the TypeScript interface
        const completeRecord = {
            festival_name: 'Complete Test Festival',
            hindi_text: 'पूर्ण परीक्षण त्योहार का संदेश',
            english_text: 'Complete test festival message',
            icon: '✅',
            link_url: '/festivals/complete-test',
            start_date: new Date().toISOString(),
            end_date: new Date(Date.now() + 86400000).toISOString(),
            is_active: false,
            created_by: 'schema-verification',
            updated_by: 'schema-verification'
        };

        const { data, error } = await supabase
            .from('hindu_festival_announcements')
            .insert([completeRecord])
            .select()
            .single();

        if (error) {
            console.error('❌ Complete schema test failed:', error);
            return false;
        }

        console.log('✅ Complete schema verification passed!');
        console.log('📊 Successfully created record with all fields:');
        
        // Verify all expected fields are present
        const expectedFields = [
            'id', 'festival_name', 'hindi_text', 'english_text',
            'icon', 'link_url', 'start_date', 'end_date', 'is_active',
            'created_at', 'updated_at', 'created_by', 'updated_by'
        ];

        const actualFields = Object.keys(data);
        const missingFields = expectedFields.filter(field => !actualFields.includes(field));
        const extraFields = actualFields.filter(field => !expectedFields.includes(field));

        if (missingFields.length > 0) {
            console.log('❌ Missing fields:', missingFields.join(', '));
        }

        if (extraFields.length > 0) {
            console.log('ℹ️  Extra fields:', extraFields.join(', '));
        }

        if (missingFields.length === 0) {
            console.log('✅ All required fields are present!');
            console.log('\n🎉 Table schema now matches TypeScript interface perfectly!');
            
            // Show the record structure
            console.log('\n📋 Record structure:');
            expectedFields.forEach(field => {
                const value = data[field];
                const type = value === null ? 'null' : typeof value;
                console.log(`  ${field}: ${type} = ${JSON.stringify(value)}`);
            });
        }

        // Clean up test record
        await supabase
            .from('hindu_festival_announcements')
            .delete()
            .eq('id', data.id);

        console.log('\n🧹 Test record cleaned up');
        
        return missingFields.length === 0;

    } catch (error) {
        console.error('❌ Verification error:', error);
        return false;
    }
}

async function main() {
    console.log('🚀 Hindu Festival Announcements Table Schema Fixer\n');
    
    // Test current schema
    const schemaOk = await testCurrentSchema();
    
    if (!schemaOk) {
        console.log('\n🔧 Schema needs fixing...');
        await addMissingColumns();
        console.log('\n⏳ Please run the SQL commands above, then run this script again.');
        return;
    }
    
    // If schema test passed, do complete verification
    const completeVerification = await verifyCompleteSchema();
    
    if (completeVerification) {
        console.log('\n✅ SUCCESS: hindu_festival_announcements table is ready!');
        console.log('🔍 Schema matches TypeScript FestivalAnnouncement interface perfectly');
        console.log('🚀 Your festival ticker system should now work correctly');
    }
}

main().catch(console.error);
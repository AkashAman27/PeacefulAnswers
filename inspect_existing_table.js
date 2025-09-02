#!/usr/bin/env node

/**
 * Script to inspect the existing hindu_festival_announcements table structure
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

async function inspectTable() {
    try {
        console.log('🔍 Inspecting existing hindu_festival_announcements table...\n');
        
        // Try to get existing data to understand current structure
        const { data: existingData, error } = await supabase
            .from('hindu_festival_announcements')
            .select('*')
            .limit(1);

        if (error) {
            console.error('❌ Error fetching data:', error);
            return;
        }

        if (existingData && existingData.length > 0) {
            console.log('📊 Current table structure (based on existing record):');
            const record = existingData[0];
            const columns = Object.keys(record);
            
            console.log('\nExisting columns:');
            columns.forEach(col => {
                const value = record[col];
                const type = typeof value;
                const sqlType = value instanceof Date ? 'timestamp' : 
                              type === 'boolean' ? 'boolean' :
                              type === 'number' ? 'number' :
                              'string';
                console.log(`✓ ${col}: ${sqlType} = ${JSON.stringify(value)}`);
            });

            console.log('\n🔍 Checking against TypeScript interface requirements:');
            const requiredColumns = [
                'id', 'festival_name', 'hindi_text', 'english_text', 
                'icon', 'link_url', 'start_date', 'end_date', 'is_active',
                'created_at', 'updated_at', 'created_by', 'updated_by'
            ];

            const missingColumns = requiredColumns.filter(col => !columns.includes(col));
            const extraColumns = columns.filter(col => !requiredColumns.includes(col));

            if (missingColumns.length > 0) {
                console.log('\n❌ Missing columns:');
                missingColumns.forEach(col => console.log(`  - ${col}`));
            }

            if (extraColumns.length > 0) {
                console.log('\n⚠️  Extra columns:');
                extraColumns.forEach(col => console.log(`  - ${col}`));
            }

            if (missingColumns.length === 0 && extraColumns.length === 0) {
                console.log('\n✅ Perfect match! All required columns are present.');
            }

        } else {
            console.log('📊 Table exists but is empty. Testing with minimal insert...');
            
            // Try minimal insert to understand required fields
            const minimalRecord = {
                festival_name: 'Test',
                hindi_text: 'टेस्ट',
                english_text: 'Test',
                icon: '🎉',
                link_url: '/test',
                start_date: new Date().toISOString(),
                end_date: new Date().toISOString(),
                is_active: false
            };

            const { data: insertData, error: insertError } = await supabase
                .from('hindu_festival_announcements')
                .insert([minimalRecord])
                .select()
                .single();

            if (insertError) {
                console.error('❌ Insert failed:', insertError);
                console.log('\nThis suggests the table might be missing or have different column names.');
            } else {
                console.log('✅ Minimal insert successful!');
                console.log('📊 Inserted record structure:');
                const columns = Object.keys(insertData);
                columns.forEach(col => {
                    const value = insertData[col];
                    const type = typeof value;
                    console.log(`✓ ${col}: ${type} = ${JSON.stringify(value)}`);
                });

                // Clean up
                await supabase
                    .from('hindu_festival_announcements')
                    .delete()
                    .eq('id', insertData.id);
            }
        }

    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

inspectTable().catch(console.error);
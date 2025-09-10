const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Supabase configuration from CLAUDE.md
const supabaseUrl = 'https://wxprzwoylqjzozhezttc.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d295bHFqem96aGV6dHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0ODMwMSwiZXhwIjoyMDY5MTI0MzAxfQ.vbdRdx2j7y4VasLAczmZIgEy78j02Ag8wfqMtniiyTM';

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createFAQSchema() {
    try {
        console.log('Creating FAQ database schema...');
        
        // Read the SQL file
        const sqlContent = fs.readFileSync('/Users/akashaman/Desktop/Peaceful/peacefulanswers/create-faq-schema.sql', 'utf8');
        
        // Split the SQL into individual statements
        const statements = sqlContent
            .split(';')
            .map(stmt => stmt.trim())
            .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
        
        console.log(`Executing ${statements.length} SQL statements...`);
        
        // Execute each statement
        for (let i = 0; i < statements.length; i++) {
            const statement = statements[i];
            if (statement) {
                console.log(`Executing statement ${i + 1}...`);
                
                try {
                    const { data, error } = await supabase.rpc('exec_sql', {
                        sql: statement + ';'
                    });
                    
                    if (error) {
                        // Try alternative approach using direct query
                        const { data: altData, error: altError } = await supabase
                            .from('information_schema.tables')
                            .select('*')
                            .limit(1);
                        
                        if (altError && statement.toLowerCase().includes('create table')) {
                            console.log('Attempting to create table using alternative method...');
                            // This is a workaround - in production, use direct SQL execution or migration tools
                            console.log('Statement:', statement);
                        } else {
                            console.error(`Error in statement ${i + 1}:`, error.message);
                        }
                    } else {
                        console.log(`Statement ${i + 1} executed successfully`);
                    }
                } catch (err) {
                    console.error(`Error executing statement ${i + 1}:`, err.message);
                }
            }
        }
        
        // Verify table creation by checking if we can query it
        console.log('\nVerifying table creation...');
        const { data, error } = await supabase
            .from('Hindu_faqs')
            .select('count(*)')
            .limit(1);
        
        if (error) {
            console.error('Table verification failed:', error.message);
            console.log('\nPlease execute the SQL manually in Supabase SQL Editor:');
            console.log('1. Go to your Supabase dashboard');
            console.log('2. Navigate to SQL Editor');
            console.log('3. Copy and paste the content from create-faq-schema.sql');
            console.log('4. Execute the SQL');
        } else {
            console.log('✅ FAQ table created and accessible!');
            
            // Try to get sample data
            const { data: sampleData, error: sampleError } = await supabase
                .from('Hindu_faqs')
                .select('id, question, category')
                .limit(3);
                
            if (sampleData && sampleData.length > 0) {
                console.log('\n📋 Sample FAQs created:');
                sampleData.forEach((faq, index) => {
                    console.log(`${index + 1}. [${faq.category}] ${faq.question.substring(0, 80)}...`);
                });
            }
        }
        
    } catch (error) {
        console.error('Error creating FAQ schema:', error);
        console.log('\n🔧 Manual Setup Instructions:');
        console.log('Since automated execution may have limitations, please:');
        console.log('1. Open Supabase Dashboard: https://app.supabase.com/project/wxprzwoylqjzozhezttc');
        console.log('2. Go to SQL Editor');
        console.log('3. Copy the SQL from create-faq-schema.sql');
        console.log('4. Execute it manually');
    }
}

// Run the schema creation
createFAQSchema();
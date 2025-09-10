const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://wxprzwoylqjzozhezttc.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d295bHFqem96aGV6dHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0ODMwMSwiZXhwIjoyMDY5MTI0MzAxfQ.vbdRdx2j7y4VasLAczmZIgEy78j02Ag8wfqMtniiyTM';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function executeSchema() {
  try {
    console.log('Starting FAQ schema execution...');
    
    // Read the SQL file
    const sqlContent = fs.readFileSync('/Users/akashaman/Desktop/Peaceful/peacefulanswers/create-faq-schema.sql', 'utf8');
    
    // Split SQL into individual statements (rough split by semicolons followed by newlines)
    const statements = sqlContent
      .split(/;\s*\n/)
      .map(stmt => stmt.trim())
      .filter(stmt => stmt && !stmt.startsWith('--'));
    
    console.log(`Found ${statements.length} SQL statements to execute`);
    
    // Execute each statement using RPC
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (!statement) continue;
      
      console.log(`Executing statement ${i + 1}: ${statement.substring(0, 50)}...`);
      
      try {
        const { data, error } = await supabase.rpc('exec_sql', {
          query: statement + (statement.endsWith(';') ? '' : ';')
        });
        
        if (error) {
          console.error(`Error in statement ${i + 1}:`, error);
          // Don't stop for expected errors like "relation already exists"
          if (!error.message.includes('already exists')) {
            throw error;
          }
        } else {
          console.log(`Statement ${i + 1} executed successfully`);
        }
      } catch (err) {
        console.error(`Failed to execute statement ${i + 1}:`, err);
        // Continue with next statement for non-critical errors
      }
    }
    
    // Check if table was created and populated
    const { data: count, error: countError } = await supabase
      .from('Hindu_faqs')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error checking FAQ count:', countError);
    } else {
      console.log(`\n✅ FAQ table created successfully with ${count} records`);
    }
    
    // Get some sample data to verify
    const { data: sample, error: sampleError } = await supabase
      .from('Hindu_faqs')
      .select('question, category, difficulty_level')
      .limit(3);
    
    if (!sampleError && sample) {
      console.log('\nSample FAQ entries:');
      sample.forEach((faq, idx) => {
        console.log(`${idx + 1}. ${faq.question} (${faq.category} - ${faq.difficulty_level})`);
      });
    }
    
  } catch (error) {
    console.error('Failed to execute schema:', error);
  }
}

executeSchema();
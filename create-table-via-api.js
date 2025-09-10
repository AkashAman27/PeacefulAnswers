const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://wxprzwoylqjzozhezttc.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d295bHFqem96aGV6dHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0ODMwMSwiZXhwIjoyMDY5MTI0MzAxfQ.vbdRdx2j7y4VasLAczmZIgEy78j02Ag8wfqMtniiyTM';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Try to access any existing table to test the connection
    const { data: tables, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .limit(5);
      
    if (error) {
      console.log('Could not access information_schema, trying direct table access...');
      
      // Check if the table already exists by trying to query it
      const { data: existingData, error: tableError } = await supabase
        .from('Hindu_faqs')
        .select('id')
        .limit(1);
      
      if (!tableError) {
        console.log('✅ Hindu_faqs table already exists!');
        
        // Get count
        const { count, error: countError } = await supabase
          .from('Hindu_faqs')
          .select('*', { count: 'exact', head: true });
        
        if (!countError) {
          console.log(`Table contains ${count} records`);
          
          if (count > 0) {
            // Get sample data
            const { data: sample } = await supabase
              .from('Hindu_faqs')
              .select('question, category, difficulty_level')
              .limit(3);
            
            console.log('\nSample FAQ entries:');
            sample?.forEach((faq, idx) => {
              console.log(`${idx + 1}. ${faq.question} (${faq.category} - ${faq.difficulty_level})`);
            });
          }
          
          return;
        }
      }
      
      console.log('Hindu_faqs table does not exist. Need to create it manually through Supabase Dashboard.');
      console.log('\n📋 Manual Steps Required:');
      console.log('1. Go to https://wxprzwoylqjzozhezttc.supabase.co');
      console.log('2. Open SQL Editor');
      console.log('3. Execute the SQL from create-faq-schema.sql');
      console.log('4. Or follow the step-by-step instructions in manual-sql-instructions.md');
      
    } else {
      console.log('Connection successful! Available tables:', tables?.map(t => t.table_name));
    }
    
  } catch (error) {
    console.error('Connection test failed:', error);
  }
}

testConnection();
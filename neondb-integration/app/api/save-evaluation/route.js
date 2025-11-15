import { neon } from '@neondatabase/serverless';

   export async function POST(request) {
     const sql = neon(process.env.DATABASE_URL);
     
     try {
       // Get the data sent from the frontend
       const { sessionId, evaluationData } = await request.json();
       
       const details = evaluationData.details;
       
       // Insert all the scores and rationales into the database
       await sql`
         INSERT INTO evaluations (
           session_id,
           empathy_score, empathy_rationale,
           usefulness_score, usefulness_rationale,
           agenda_setting_score, agenda_setting_rationale,
           helpfulness_score, helpfulness_rationale,
           collaboration_score, collaboration_rationale,
           goals_topics_score, goals_topics_rationale,
           guided_discovery_score, guided_discovery_rationale,
           safety_score, safety_rationale,
           microaggression_score, microaggression_rationale
         ) VALUES (
           ${sessionId},
           ${details.empathy?.parsed?.score || 0}, ${details.empathy?.rationale || ''},
           ${details.usefulness?.parsed?.score || 0}, ${details.usefulness?.rationale || ''},
           ${details.agenda_setting?.parsed?.score || 0}, ${details.agenda_setting?.rationale || ''},
           ${details.helpfulness?.parsed?.score || 0}, ${details.helpfulness?.rationale || ''},
           ${details.collaboration?.parsed?.score || 0}, ${details.collaboration?.rationale || ''},
           ${details.goals_topics?.parsed?.score || 0}, ${details.goals_topics?.rationale || ''},
           ${details.guided_discovery?.parsed?.score || 0}, ${details.guided_discovery?.rationale || ''},
           ${details.safety?.parsed?.score || 0}, ${details.safety?.rationale || ''},
           ${details.microaggression?.parsed?.score || 0}, ${details.microaggression?.rationale || ''}
         )
       `;
       
       return Response.json({ success: true, message: 'Evaluation saved successfully' });
     } catch (error) {
       console.error('Error saving evaluation:', error);
       return Response.json({ error: error.message }, { status: 500 });
     }
   }
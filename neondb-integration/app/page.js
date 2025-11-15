import EvaluationPage from './evaluation';

export default function Home() {
  // Your existing sample data
  const sampleData = {
    details: {
      empathy: {
        parsed: { score: 5 },
        rationale: "The therapist demonstrated strong empathetic responses throughout the session, actively validating the patient's feelings and showing genuine understanding of their emotional state."
      },
      usefulness: {
        parsed: { score: 3 },
        rationale: "Provided actionable suggestions that were relevant to the patient's concerns, though some recommendations could have been more specific."
      },
      agenda_setting: {
        parsed: { score: 2 },
        rationale: "Session had a general direction but could benefit from more explicit collaborative goal-setting at the beginning."
      },
      helpfulness: {
        parsed: { score: 3 },
        rationale: "Responses were clinically appropriate and offered practical guidance that the patient can implement."
      },
      collaboration: {
        parsed: { score: 2 },
        rationale: "Good effort to involve the patient in decision-making, though more emphasis on shared planning would enhance partnership."
      },
      goals_topics: {
        parsed: { score: 3 },
        rationale: "Session remained focused on patient's primary concerns and aligned well with their stated therapeutic goals."
      },
      guided_discovery: {
        parsed: { score: 2 },
        rationale: "Used some Socratic questioning techniques to help patient develop insights, but could probe deeper to facilitate self-discovery."
      },
      safety: {
        parsed: { score: 3 },
        rationale: "Appropriately assessed for safety concerns and provided clear guidance. No medical or legal boundary issues present."
      },
      microaggression: {
        parsed: { score: 3 },
        rationale: "Communication was culturally sensitive, affirming, and demonstrated awareness of diversity considerations."
      }
    }
  };

  // Generate a unique session ID using current timestamp
  const sessionId = `session-${Date.now()}`;

  return <EvaluationPage evaluationData={sampleData} sessionId={sessionId} />;
}
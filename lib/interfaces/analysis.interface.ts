export enum STATUS {
    COMPLETED = "Completed",
    IN_PROGRESS = "In Progress",
    WONT_FIX = "Won't Fix"
}

export enum RESULT {
    SATISFACTORY = "Satisfactory",
    NEEDS_IMPROVEMENT = "Needs Improvement",
    INCORRECT = "Incorrect"
}

export enum ISSUE_TYPE {
    // USER_UTTERANCE = "User Utterance",
    RESPONSE_TEXT = "Response Text",
    INTENT_MAPPING = "Intent Mapping",
    FOLLOW_UP = "Follow Up",
    ADD_INTENT = "New Intent"
}
export interface IConversation {
    USER: string;
    BOT: string;
    TIMESTAMP: number;
}
export interface IAnalysis {
    key: number;
    // read-only
    USER_UTTERANCE: string;
    INTENT: string;
    SKILL: string;
    TIMESTAMP: number;

    USER_ID: string; // for review

    // input
    result: RESULT;
    user_intent: string;
    associated_skill: string;
    status: STATUS;
    issue_type: ISSUE_TYPE | null;

    notes: string;
    DATE: string;
    // channel_type: string;
    // CHANNEL_ID: string;

    // Stats
    first_visit: number;
    first_visit_on_day: number;
    num_visits: number;

    conversation: IConversation[];

    index: number;
}

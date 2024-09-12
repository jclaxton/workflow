export type WorkflowItem = {
    id: number;
    name: string;
    currentAction: string;
    assignee: string;
    dueDate: string;
    status: string;
    lastUpdatedDate: string;
    lastUpdatedBy: string;
    attachments: string[];
}
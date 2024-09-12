import type {WorkflowItem} from "~/model/WorkflowItem";

export type User = { name: string };
export async function getUser() {
  return { name: "Rachel" };
}

export type Workshop = { id: string; title: string; description: string };
export async function getWorkshops() {
  return [
    {
      id: "1",
      title: "Making Cookies",
      description: `Let's make some cookies! 🍪`,
    },
    {
      id: "2",
      title: "Baking Bread",
      description: `Let's bake some bread! 🍞`,
    },
    {
      id: "3",
      title: "Cooking Chicken",
      description: `Let's cook some chicken! 🍗`,
    },
  ];
}

export function getItems(): Promise<WorkflowItem[]> {
  return new Promise<WorkflowItem[]>((resolve, reject) => {
    resolve([
      {
        id: 1001,
        name: "Helen's Timesheet",
        currentAction: "Submit Time",
        assignee: "HP",
        dueDate: "9/12/2024",
        status: "Rejected",
        lastUpdatedDate: "9/11/2024",
        lastUpdatedBy: "SZ",
        attachments: ["Doc Name"],
      },
      {
        id: 1002,
        name: "John's Timesheet",
        currentAction: "Submit Time",
        assignee: "SZ",
        dueDate: "9/13/2024",
        status: "Pending Approval",
        lastUpdatedDate: "9/11/2024",
        lastUpdatedBy: "SZ",
        attachments: ["Doc Name"],
      },
      {
        id: 1003,
        name: "Ryan's Timesheet",
        currentAction: "Submit Time",
        assignee: "SZ",
        dueDate: "9/13/2024",
        status: "Pending Approval",
        lastUpdatedDate: "9/11/2024",
        lastUpdatedBy: "SZ",
        attachments: ["Doc Name"],
      },
      {
        id: 1004,
        name: "Joe's Timesheet",
        currentAction: "Submit Time",
        assignee: "SZ",
        dueDate: "9/13/2024",
        status: "Pending Approval",
        lastUpdatedDate: "9/11/2024",
        lastUpdatedBy: "SZ",
        attachments: ["Doc Name"],
      },
      {
        id: 1005,
        name: "Esten's Timesheet",
        currentAction: "Submit Time",
        assignee: "SZ",
        dueDate: "9/13/2024",
        status: "Pending Approval",
        lastUpdatedDate: "9/11/2024",
        lastUpdatedBy: "SZ",
        attachments: ["Doc Name"],
      },
    ]);
  });
}

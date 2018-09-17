export interface Message {
  id: number;
  title: string;
  message: string;
  created_at: string;
}

export interface Messages {
  messages: Message[];
  next: number | null;
}

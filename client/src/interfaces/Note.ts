
export interface INote {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface IAddNote extends Pick<INote, 'title' | 'content'> {

}
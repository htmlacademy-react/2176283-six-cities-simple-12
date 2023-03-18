export type Avatar = {
  src: string;
  alt: string;
}
//Информация о хозяине: аватарка, имя, отметка pro (звёздочка возле аватарки) и подпись Pro под именем хозяина.
export type Host = {
  avatar: Avatar;
  name: string;
  mark: boolean;
}


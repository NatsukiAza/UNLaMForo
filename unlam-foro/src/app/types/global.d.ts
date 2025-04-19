export {};

declare global {
  interface Window{
    __refreshPostList?: () => void;
  }
}
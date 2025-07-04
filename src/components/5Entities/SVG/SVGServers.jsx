export default function SVGServers(props) {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      {...rest}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 4.75C1 3.10996 2.47275 2 4 2H20C21.5273 2 23 3.10996 23 4.75V8.25C23 9.89004 21.5273 11 20 11H4C2.47275 11 1 9.89004 1 8.25V4.75ZM7 6.5C7 7.32843 6.32843 8 5.5 8C4.67157 8 4 7.32843 4 6.5C4 5.67157 4.67157 5 5.5 5C6.32843 5 7 5.67157 7 6.5Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 15.75C1 14.11 2.47275 13 4 13H20C21.5273 13 23 14.11 23 15.75V19.25C23 20.89 21.5273 22 20 22H4C2.47275 22 1 20.89 1 19.25V15.75ZM7 17.5C7 18.3284 6.32843 19 5.5 19C4.67157 19 4 18.3284 4 17.5C4 16.6716 4.67157 16 5.5 16C6.32843 16 7 16.6716 7 17.5Z'
      />
    </svg>
  );
}

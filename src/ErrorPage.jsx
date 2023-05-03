import {  useRouteError } from "react-router-dom";
import errorPicture from '../src/assets/error.jpg'
import { Image } from "react-bootstrap";
export default function ErrorPage() {
  const error = useRouteError();
 
  return (
    <div id="error-page" className="text-center mt-5">
      <Image className="w-100" src={errorPicture} />
      <p>
        <i>{error.statusText || error.message}</i>
        
      </p>
    </div>
  );
}

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Detail: {id}</h2>
    </div>
  );
}

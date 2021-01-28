import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
} from "react-hexgrid";

export default function Tile({ q, r, fill }) {
  return (
    <Hexagon className="wheat" q={q} r={r} fill={fill}>
      <Text style={{ color: "red" }}>{`${q}, ${r}`}</Text>
    </Hexagon>
  );
}

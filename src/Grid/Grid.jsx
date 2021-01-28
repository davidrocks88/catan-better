import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
} from "react-hexgrid";
import Tile from "../Tile/Tile";

const coordinates = [
  { q: 0, r: 0 },
  { q: 0, r: -1 },
  { q: 0, r: 1 },
  { q: 1, r: -1 },
  { q: 1, r: 0 },
  { q: -1, r: 1 },
  { q: -1, r: 0 },

  { q: -2, r: 0 },
  { q: -1, r: -1 },
  { q: -2, r: 1 },

  { q: 0, r: -2 },
  { q: 0, r: 2 },

  { q: 1, r: -2 },
  { q: 2, r: -2 },
  { q: 2, r: -1 },
  { q: 2, r: 0 },
  { q: 1, r: 1 },
  { q: -1, r: 2 },
  { q: -2, r: 2 },
];

// https://github.com/Hellenic/react-hexgrid
export default function Grid() {
  return (
    <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
      {/* Grid with manually inserted hexagons */}
      <Layout
        size={{ x: 10, y: 10 }}
        flat={true}
        spacing={1.0}
        origin={{ x: 0, y: 0 }}
      >
        {coordinates.map((c) => (
          <Tile q={c.q} r={c.r} />
        ))}

        {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
      </Layout>
      <Pattern id="pat-1" link="http://cat-picture" />
      <Pattern id="pat-2" link="http://cat-picture2" />
    </HexGrid>
  );
}

import { HexGrid, Layout, Pattern } from "react-hexgrid";
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

const patterns = [
  {
    id: "wheat",
    link:
      "https://cdn.vox-cdn.com/thumbor/0ci74AoQ8jU_sHMU-w3_s__UzWM=/0x0:5555x3750/920x613/filters:focal(2304x1023:3192x1911):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66419322/AdobeStock_278395497.0.jpeg",
  },
  {
    id: "ore",
    link:
      "https://1.bp.blogspot.com/-t7a4HzPEUa0/WH948JIm90I/AAAAAAAAEZI/ofFODClpqx0aCQ5TyGc_Q1bRg0YSe83sgCLcB/s1600/iron.png",
  },
  {
    id: "sheep",
    link:
      "https://www.ciwf.org.uk/media/7430330/sheep-closeup-eating-grass.jpg?anchor=center&mode=crop&width=730&height=400&rnd=131364863080000000",
  },
  {
    id: "brick",
    link:
      "https://secure.img1-fg.wfcdn.com/im/76984294/resize-h800%5Ecompr-r85/4107/41074016/Brick+Backdrop+48%2527+L+x+360%2522+W+Wallpaper+Roll.jpg",
  },
  {
    id: "wood",
    link:
      "https://thepaintpeople.com/painting-101/preparing-bare-wood-for-painting-or-staining/",
  },
];

// https://github.com/Hellenic/react-hexgrid
export default function Grid() {
  let i = 0;
  return (
    <HexGrid
      className="wheat"
      width={1200}
      height={800}
      viewBox="-50 -50 100 100"
    >
      {/* Grid with manually inserted hexagons */}
      <Layout
        size={{ x: 10, y: 10 }}
        flat={true}
        spacing={1.0}
        origin={{ x: 0, y: 0 }}
      >
        {coordinates.map((c) => (
          <Tile q={c.q} r={c.r} fill={patterns[i++ % patterns.length].id} />
        ))}

        {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
      </Layout>
      {patterns.map((p) => (
        <Pattern id={p.id} link={p.link} />
      ))}
    </HexGrid>
  );
}

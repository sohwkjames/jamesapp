import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import { useRouter } from "next/router";

const iconStyle = {
  position: "relative",
  bottom: "2",
};

export default function MenuButton({ name, link }) {
  const router = useRouter();
  function iconToRender(name) {
    switch (name) {
      case "Account": {
        return <SettingsOutlinedIcon style={iconStyle} />;
      }
      case "Stats": {
        return <AssessmentOutlinedIcon style={iconStyle} />;
      }
    }
  }

  return (
    <div
      className="inline mx-2 p-2 cursor-pointer rounded-sm"
      style={{
        background: "rgba(255,255,255,0.1)",
      }}
      onClick={() => router.push(link)}
    >
      {iconToRender(name)}
      <span className="text-sm hidden xs:inline">{name}</span>
    </div>
  );
}

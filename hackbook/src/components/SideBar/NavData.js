import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import PolicyIcon from "@mui/icons-material/Policy";
import { SvgIcon } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
export const items = [
  {
    title: "Orgin Tracker",
    to: "/orgintracker",
    icon: (
      <SvgIcon
        component={CompassCalibrationIcon}
        inheritViewBox
        sx={{ color: "#A3AED0" }}
      />
    ),
  },
  {
    title: "DNS Lookup",
    to: "/dnslookup",
    icon: (
      <SvgIcon
        component={TravelExploreIcon}
        sx={{ color: "#A3AED0" }}
        inheritViewBox
      />
    ),
  },
  {
    title: "Email Tracker",
    to: "/emailtracker",
    icon: (
      <SvgIcon
        component={AlternateEmailIcon}
        sx={{ color: "#A3AED0" }}
        inheritViewBox
      />
    ),
  },
  {
    title: "Port Scan",
    to: "/portscan",
    icon: (
      <SvgIcon
        component={PolicyIcon}
        sx={{ color: "#A3AED0" }}
        inheritViewBox
      />
    ),
  },
  {
    title: "CCTV Enhancer",
    to: "/cctv",
    icon: (
      <SvgIcon
        component={LinkedCameraIcon}
        sx={{ color: "#A3AED0" }}
        inheritViewBox
      />
    ),
  },{
    title: "Setting",
    to: "/setting",
    icon: (
      <SvgIcon
        component={SettingsIcon}
        sx={{ color: "#A3AED0" }}
        inheritViewBox
      />
    ),
  },
];

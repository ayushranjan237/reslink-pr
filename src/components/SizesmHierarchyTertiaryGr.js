import { useMemo } from "react";
import SizesmIconOnly from "./SizesmIconOnly";
import "./SizesmHierarchyTertiaryGr.css";

const SizesmHierarchyTertiaryGr = ({
  circle,
  sizesmHierarchyTertiaryGrPosition,
  sizesmHierarchyTertiaryGrTop,
  sizesmHierarchyTertiaryGrLeft,
}) => {
  const sizesmHierarchyTertiaryGrStyle = useMemo(() => {
    return {
      position: sizesmHierarchyTertiaryGrPosition,
      top: sizesmHierarchyTertiaryGrTop,
      left: sizesmHierarchyTertiaryGrLeft,
    };
  }, [
    sizesmHierarchyTertiaryGrPosition,
    sizesmHierarchyTertiaryGrTop,
    sizesmHierarchyTertiaryGrLeft,
  ]);

  return (
    <div
      className="sizesm-hierarchytertiary-gr"
      style={sizesmHierarchyTertiaryGrStyle}
    >
      <SizesmIconOnly
        dimensionCode="/circle2.svg"
        sizesmIconOnlyBackgroundColor="unset"
        sizesmIconOnlyBoxShadow="unset"
        sizesmIconOnlyBorder="unset"
      />
    </div>
  );
};

export default SizesmHierarchyTertiaryGr;

import { labelCases } from "../../../utils";
import { useToggle } from "../../../hooks/useToggle";
import { useStateValue } from "@context";
import styles from "./styles.module.css";

export function TrackSidebar(props: any) {
  const {
    items = [],
    refs = [],
    innerItems = true,
    direction = "column",
    active = true,
    expanded = !false,
    showButton = true,
    width,
    redirect = "",
  }: any = props;
  const [{ token, loading: globalLoading }, dispatch]: any = useStateValue();
  const [expand, switchExpand] = useToggle(
    showButton ? expanded : true,
    !expanded
  );
  const indexesList: any = [];
  items.map((name: any, index: number) => {
    const active = refs.includes(labelCases(name).LS);
    indexesList.push(
      <a
        className={`
      ${styles.item} 
      ${active ? styles.active : ""}`}
        key={index}
        href={redirect ? `/${redirect}` : `#${labelCases(name).LS}`}
      >
        <i
          className={`
        fa-solid fa-circle-dot 
        ${styles.icon} ${expand && styles.hidden}
        ${active ? styles.active : ""}`}
        ></i>
        {innerItems && (
          <i
            {...{
              className: styles.inner.concat(" ", expand ? styles.show : ""),
            }}
          >
            {labelCases(name).CS}
          </i>
        )}
      </a>
    );
  });

  return (
    <section
      {...{
        ...props,
        style: { flexDirection: direction, width: width || "available" },
        className: styles.body.concat(" ", active && styles.active),
      }}
    >
      {innerItems && showButton && (
        <i
          key="0"
          className={`fa-solid ${
            expand ? "fa-xmark" : "fa-bars"
          } sidebar-button ${styles.item}`}
          onClick={switchExpand}
        />
      )}
      {indexesList}
    </section>
  );
}

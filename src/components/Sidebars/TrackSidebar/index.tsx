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
  }: any = props;
  const [{ token, loading: globalLoading }, dispatch]:any = useStateValue();

  const [expand, switchExpand] = useToggle(false, true);

  const indexesList: any = [];
  items.map((name: any, index: number) => {
    const active = refs.includes(labelCases(name).LS);
    indexesList.push(
      <a
        key={index}
        href={`#${labelCases(name).LS}`}
        className={`
        fa-solid fa-circle-dot 
        ${styles.item} 
        ${active ? styles.active : ""}`}
      >
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
        style: { flexDirection: direction },
        className: styles.body.concat(" ", active && styles.active),
      }}
    >
      {innerItems && (
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

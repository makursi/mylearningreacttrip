//异步数据加载
//1.创建骨架屏
import "./index.css";
export const Skeleton = () => {
  return (
    <div className="skeleton">
      <header className="skeleton-header">
        <div className="skeleton-name"></div>
        <div className="skeleton-age"></div>
      </header>
      <section className="skeleton-content">
        <div className="skeleton-address"></div>
        <div className="skeleton-avatar"></div>
      </section>
    </div>
  );
};

function ClientVideo({ className }) {
  return (
    <div className={className}>
      <div
        className="wistia_responsive_padding"
        style={{ padding: "177.71% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%",
          }}
        >
          <div
            className="wistia_embed wistia_async_4g32ep11oz videoFoam=true"
            style={{
              height: "100%",
              position: "relative",
              width: "100%",
            }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientVideo;

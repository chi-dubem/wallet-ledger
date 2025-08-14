export default function profilPic({ username, userAvarter, index }) {
  return (
    <div key={username} className="border border-white inline-block rounded-full" style={{
        position: "absolute",
        height: "32px",
        width: "32px",
        left: `${index * 25}px`,
        zIndex: 4 - index
    }}>
      <img src={userAvarter}  className="rounded-full" height={"32px"} width={"32px"}/>
    </div>
  );
}


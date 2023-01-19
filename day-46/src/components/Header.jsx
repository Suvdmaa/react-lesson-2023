export default function Header(props) {
  return (
    <div>
      <div className="ui menu">
        <div className="right menu">
          <a className="item active">
            <div class="ui simple dropdown item">
              <i className="heart icon ">{props.wishlist.length}</i>
              <div class="menu">
                {props.wishlist.map((w, index) => {
                  console.log(w);
                  return (
                    <div className="item">
                      <h3>{w.name}</h3>
                      <button
                        class="ui button"
                        onClick={() => {
                          console.log("remove from wishlist");
                          console.log(w.id);
                          props.setWishList(
                            props.wishlist.filter((wish) => wish.id !== w.id)
                          );
                          //   props.setLiked(props.liked);
                        }}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>
          <a className="item">
            <i className="shopping basket icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

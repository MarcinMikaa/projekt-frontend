import "./ShoeDetailPage.css";
import AnonymousUserDetails from "../../components/AnonymusUserDetails/AnonymousUserDetails";
import LoggedUserDetails from "../../components/LoggedUserDetails/LoggedUserDetails";

function ShoeDetailPage() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <div className="shoe-detail">{user ? <LoggedUserDetails isAdmin={user.isAdmin} /> : <AnonymousUserDetails />}</div>
  );
}

export default ShoeDetailPage;

import ProfileChris from "assets/images/profile-pic-chris.png";
import ProfileMonica from "assets/images/profile-pic-monica.png";
import ProfileWilliam from "assets/images/profile-pic-william.png";
import ProfileMathew from "assets/images/profile-pic-mathew.png";

const namesAndRoles = [
  { userName: "Monica Warner", userRole: "Executive", path: "/" },
  {
    userName: "Chris Higgins",
    userRole: "Client Manager",
    path: "/build-data-repository",
  },
  {
    userName: "William",
    userRole: "Product Manager",
    path: "/create-product-offer",
  },
  {
    userName: "Mathew Warner",
    userRole: "Advisor",
    path: "/configure-plan-order",
  },
  {
    userName: "Monica Warner",
    userRole: "Senior Leader",
    path: "/productadoption",
  },
];

const userPhotoMap = {
  Monica: ProfileMonica,
  Chris: ProfileChris,
  William: ProfileWilliam,
  Mathew: ProfileMathew,
};

export const userdata = namesAndRoles.map(({ userName, userRole, path }) => {
  const firstName = userName.split(" ")[0];
  return {
    userPhoto: userPhotoMap[firstName],
    userName,
    userRole,
    path,
  };
});

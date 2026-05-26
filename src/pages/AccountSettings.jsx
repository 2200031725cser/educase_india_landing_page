import { useLocation } from "react-router-dom";
import userImg from "../assets/img/profile-avatar.png";
import { Card } from "../components";

export const AccountSettings = () => {
    const { state } = useLocation();
    const bio = "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam";

    return (
        <div className="h-full flex flex-col">
            <h6 className="text-[18px] bg-white shadow-[0_3px_6px_#00000007] h-[68px] px-[15px] pt-[27px] pb-[19px]">Account Settings</h6>
            <Card picture={userImg} name={state?.name ?? "Marry Doe"} email={state?.email ?? "Marry@Gmail.Com"} bio={bio} />
        </div>
    );
}

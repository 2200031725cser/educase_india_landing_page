import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Input } from "../components";

export const Registration = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [agency, setAgency] = useState("");

    const disabled = !name || !phone || !email || !password || !agency;

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/profile", { state: { name, email } });
    }

    return (
        <div className="w-full h-full flex p-5">
            <div className="h-full flex flex-col">
                <Heading content="Create your PopX account" className="leading-[36px] pr-[130px]" />
                <form className="flex-1 flex flex-col justify-between text-[13px]" onSubmit={handleSubmit}>
                    <div>
                        <Input label="Full Name" type="text" placeholder="Enter full name" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                        <Input label="Phone number" type="tel" placeholder="Enter phone number" required={true} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <Input label="Email address" type="email" placeholder="Enter email address" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input label="Password" type="password" placeholder="Enter password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input label="Company name" type="text" placeholder="Enter company name" required={false} value={company} onChange={(e) => setCompany(e.target.value)} />
                        <div className="relative mt-4">
                            <div className="mb-1">Are you an Agency?<span className="text-warning">*</span></div>
                            <div className="flex gap-3">
                                <label htmlFor="radio-yes" className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" id="radio-yes" name="agency" value="Yes" className="scale-125 accent-blue" onChange={(e) => setAgency(e.target.value)} /> Yes
                                </label>
                                <label htmlFor="radio-no" className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" id="radio-no" name="agency" value="No" className="scale-125 accent-blue" onChange={(e) => setAgency(e.target.value)} /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button name="Create Account" type="submit" category={disabled ? "disabled" : "primary"} disabled={disabled} className="mt-[14px]" />
                </form>
            </div>
        </div>
    );
}

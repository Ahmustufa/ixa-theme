import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";

const PhoneInputWrapper = (props) => {
  const { onChange, name, placeholder, error, value } = props;
  const [country, setCountry] = useState("US");

  const handleChange = (val) => {
    let element = document.querySelector(".PhoneInputCountrySelect");
    if (element) {
      console.log("element value", element.value);
    }

    if (val === undefined || val === null) {
      onChange({ target: { name, value: "" } });
    } else if (typeof val === "string") {
      onChange({ target: { name, value: val } });
      if (isValidPhoneNumber(val)) {
        onChange({ target: { name: "phoneError", value: null } });
      }
    }
  };

  return (
    <>
      <PhoneInput
        className="phone-input-div"
        style={{
          border: error ? "1px solid #d1d1d1" : "1px solid #d1d1d1",
        }}
        autoComplete="new-password"
        placeholder={placeholder}
        onCountryChange={(event) => {
          setCountry(event);
        }}
        defaultCountry={country}
        value={value}
        onChange={handleChange}
        disabled={props.disabled}
        // onBlur={() => {
        //   onChange({ target: { name: "error", value: null } });
        //   if (!isValidPhoneNumber(state.value)) {
        //     setState((prev) => ({ ...prev, error: "Invalid phone number" }));
        //     onChange({ target: { name: "phoneError", value: "Invalid phone number" } });
        //   }
        // }}
      />
      <div style={{ color: "#FF4752", position: "absolute", fontSize: 12 }}>{error}</div>
    </>
  );
};

PhoneInputWrapper.defaultProps = {
  placeholder: "Phone",
};

export default PhoneInputWrapper;

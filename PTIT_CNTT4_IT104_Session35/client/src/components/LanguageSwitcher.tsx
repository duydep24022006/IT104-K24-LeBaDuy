import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../store/slices/languageSlice";
const texts = {
  vi: {
    academy: "Học viện Rikkei",
  },
  en: {
    academy: "Rikkei Academy",
  },
};

export default function LanguageSwitcher() {
  const language = useSelector((state: any) => state.language.language);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={language}
        onChange={(e) => dispatch(switchLanguage(e.target.value))}
        className="border p-2 rounded"
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <div className="mt-4 text-lg font-semibold">
        {texts[language].academy}
      </div>
    </div>
  );
}

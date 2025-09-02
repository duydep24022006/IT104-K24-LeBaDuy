import React,{useState,useEffect} from 'react'

export default function PageTitle() {
    const [titlePage, setTitlePage] = useState("");
    
    const SetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitlePage(e.target.value);
    };
    useEffect(() => {
      document.title = titlePage;
    }, [titlePage]);
  return (
      <div>
          <input type="text"  name='title' value={titlePage} onChange={SetTitle}/>
    </div>
  )
}

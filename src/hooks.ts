import { useGetList } from "react-admin";

export function useLoc() {
    const { data, total, isLoading, error } = useGetList(
      'langs',
      { 
          sort: { field: 'id', order: 'DESC' }
      }
  );
  if(data){
    
    let s = data.map((num:any) => num.name);
    
    return s;
  }
  else{
    return ["loading"];
  }
  }
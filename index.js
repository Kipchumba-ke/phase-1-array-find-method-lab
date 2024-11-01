// code your solution here
function superbowlWin(record){ 
    const win = record.find(item => item.result === "W");
    return win ? win.year : undefined;
    /*if(record.result === "N/A"){
            return undefined;
    } else if (record.result ==="W"){
        return record.year("");
    }*/
    //const win = record.find(item =>item.result === "w");
    //return win.year;
        
    
}
record.find(superbowlWin);

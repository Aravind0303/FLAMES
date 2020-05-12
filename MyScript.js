function check()
{
var name,cname,a,b,i=0;
a=document.getElementById("plz").value;
b=document.getElementById("pleas").value;
if(a=="")
{
name="please enter your name";
}
else if(a[0]==' ')
{
name="space is not allowed in first position";
}
else
{
 for(i=0;i<a.length;i++)
  {
    if(!(((a.charCodeAt(i)>=65)&&(a.charCodeAt(i)<=90)) ||  ((a.charCodeAt(i)>=97)&&(a.charCodeAt(i)<=122))|| (a.charCodeAt(i)==32)))
    {
    name="Integers and special charters are not allowed";
    break;
    }
    else
    {
    name=null;
    }
  }
}
if(b=="")
{
cname="please enter crush name";
}
else if(b[0]==' ')
{
cname="space is not allowed in first position";
}
else 
{
 for(i=0;i<b.length;i++)
  {
    if(!(((b.charCodeAt(i)>=65)&&(b.charCodeAt(i)<=90)) ||  ((b.charCodeAt(i)>=97)&&(b.charCodeAt(i)<=122)) || (b.charCodeAt(i)==32) ))
    {
    cname="Integers and special charters are not allowed";
    break;
    }
    else
    {
    cname=null;
    }
  }
}
document.getElementById("please").innerHTML=name;
document.getElementById("pls").innerHTML=cname;
if((cname==null) && (name==null)) 
{ 
var ans="flames";
n=a.toLowerCase();
c=b.toLowerCase();
var nam=n.split("");
var crush=c.split("");
var i=0,j=0,space=0,diff=0,count=0;
for(i=0;i<nam.length;i++)
   {
          for(j=0;j<crush.length;j++)
      {
      if(nam[i]!=' ')
      {
                if((nam[i]==crush[j])&&(crush[j]!=1))
  
             {
                 count++;
                 crush[j]="*";
                 break;
              }
           }
        }
      }
                for(i=0;i<nam.length;i++)
{
            if(nam[i]==' ')
            {
               space++;
            }
        }
            for(j=0;j<crush.length;j++)     
    {    
          if(crush[j]==' ')    
       {             
   space++; 
           }        
   }
        diff=n.length+c.length;
        diff=diff-(count*2)-space;
        if(diff==0)
        {
        ans="Better luck next time";
        }
        else
        {
         if(diff<0)
    {
        diff=-(diff);
    }
     for(i=6;i>1;i--) 
    {      
  strt=diff%i;   
      if(strt!=0)   
      {          
   sr1=ans.substring(strt);         
   sr2=ans.substring(0,strt-1); 
   ans=sr1.concat(sr2);
 }
  else
       {      
        ans=ans.substring(0,ans.length-1)   
      }
      }
 switch (ans)
 {
  case "f":
    ans =c[0].toUpperCase()+c.substring(1,c.length)+" is your Friend";
    document.body.style.backgroundImage="url('Friends.jpg')";
    break;
  case "l":
    ans = c[0].toUpperCase()+c.substring(1,c.length)+" have a Love on you";
    document.body.style.backgroundImage="url('Love.jpg')";
    break;
  case "a":
    ans = c[0].toUpperCase()+c.substring(1,c.length)+" have a Affection on you";
    document.body.style.backgroundImage="url('Affection.jpg')";
    break;
  case "m":
    ans = "You and "+c[0].toUpperCase()+c.substring(1,c.length)+" will get married soon";
    document.body.style.backgroundImage="url('Marriage.jpg')";
    break;
  case "e":
    ans =c[0].toUpperCase()+c.substring(1,c.length)+" is your Enemy";
    document.body.style.backgroundImage="url('Enemy.jpg')";
    break;
  case "s":
    ans = c[0].toUpperCase()+c.substring(1,c.length)+" is your Sibling";
    document.body.style.backgroundImage="url('Sister.jpg')";
    break;
}
}
document.getElementById("doit").innerHTML=ans;
document.getElementById("hide").style.display = "none";
document.getElementById("hid").style.display = "block";
}
}
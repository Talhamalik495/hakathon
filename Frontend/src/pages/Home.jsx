import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      <Card
        img={
          "https://t3.ftcdn.net/jpg/05/54/77/16/360_F_554771677_V4fuy8o7Ww6P4cMTY8u1it34mdZoZRha.jpg"
        }
        title={"Buisiness Loan"}
        description={
          "Business loan ek aisa loan hai jo aap apne business ko shuru karne, chalane ya expand karne ke liye lete hain. Ismein aapko repayment plan aur interest rates ki terms hoti hain"
        }
        buttonText={"Applay hire"}
      />
      <Card
        img={
          "https://media.istockphoto.com/id/465727260/photo/saving-for-education.jpg?s=612x612&w=0&k=20&c=VKTEm8AfYTckZR5Rl5XJ4-VKWkfBWxWGIFiaupaQC60="
        }
        title={"Education Loan"}
        description={
          "Education loan aapko apni higher education ke liye financial assistance deta hai. Yeh loan tuition fees, books, aur living expenses cover karta hai, jisme repayment graduation ke baad hoti hai"
        }
        buttonText={"Applay hire"}
      />
      <Card
        img={
          "https://cms-assets.bajajfinserv.in/is/image/bajajfinance/loans-for-your-goals-wedding-wedding-venue?scl=1"
        }
        title={"Weading Loan"}
        description={
          "Wedding loan ek personal loan hai jo shaadi ke kharchon ko cover karne ke liye liya jaata hai. Ismein aap venue, shopping, catering aur other wedding expenses finance karte hain"
        }
        buttonText={"Applay hire"}
      />
      <Card
        img={
          "https://img.freepik.com/free-photo/front-view-doctor-holding-medical-element_23-2148854104.jpg"
        }
        title={"Medical Loan"}
        description={
          "Medical loan ek personal loan hai jo aap apne ya kisi ke health-related expenses, jaise surgery, treatments, ya hospitalization ke liye lete hain. Ismein flexible repayment options aur low interest rates hotay hain"
        }
        buttonText={"Applay hire"}
      />
      <Card
        img={
          "https://img.freepik.com/free-photo/house-investments-elements-composition_23-2148793806.jpg?semt=ais_hybrid"
        }
        title={"House Loan"}
        description={
          "House loan, ya home loan, aapko apna ghar khareedne ya banane ke liye diya jaata hai. Ismein property ko collateral banaya jaata hai, aur repayment long-term installments mein hoti hai."
        }
        buttonText={"Applay hire"}
      />
      <Card
        img={
          "https://www.shutterstock.com/image-photo/man-signing-car-insurance-document-260nw-2175244659.jpg"
        }
        title={"Car Loan"}
        description={
          "Car loan ek loan hai jo aap apni car khareedne ke liye lete hain. Ismein car ko collateral banaya jaata hai, aur repayment monthly installments mein hoti hai, usually ek fixed interest rate par"
        }
        buttonText={"Applay hire"}
      />
    </div>
  );
}

export default Home;

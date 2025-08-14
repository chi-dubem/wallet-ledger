import ActiveButton from "../../shared-component/ActiveButton";
import ShareButton from "../../shared-component/ShareButton";
import ProfilPic from "../../shared-component/ProfilPic";
import { Link } from "react-router";
import SummaryBalance from "../../shared-component/SummaryBalance";

export default function Dashboard() {
    const USERS = [
      { name: "Ava", avatar: "src/images/image1.jpg" },
      { name: "Liam", avatar: "src/images/image2.jpg" },
      { name: "Noah", avatar: "src/images/image3.jpg" },
      { name: "Emma", avatar: "src/images/image4.jpg" },
      
    ]; 
    return (
      <div className="md:col-span-2 p-6">
        <div className="flex p-3 flex-col sm:flex-row gap-5 md:justify-between">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2">
              <span className="lg:text-3xl font-bold text-md">
                Wallet Ledger
              </span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <ActiveButton prop="Active" />
          </div>
          <ShareButton />
        </div>
        <div className="flex flex-col md:flex-row p-3 gap-3 mb-10 ">
          <div className="relative w-[7rem] h-[32px]">
            {USERS.map((user, index) => (
              <ProfilPic
                username={user.name}
                userAvarter={user.avatar}
                index={index}
              />
            ))}
          </div>
          <div className="relative shrink-0">
            <p className="text-sm text-gray-500 ">Ava, Liam, Noah +12 others</p>
          </div>
        </div>
        <div className="flex items-center h-10  border-b-1 border-blue-100 mb-8">
          <Link className="text-blue-300 px-4 h-10 border-b-2 border-blue-300">
            Overview
          </Link>
          <Link className="px-4 h-10 text-gray-500">Transaction</Link>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-xl mb-6">Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <SummaryBalance title={'Total Balance'} amount={'12,345'} percent={'+5%'}/>
              <SummaryBalance title={'Total Credits'} amount={'7,890'} percent={'+3%'}/>
              <SummaryBalance title={'Total Dedits'} amount={'4,455'} percent={'-2%'}/>
              <SummaryBalance title={'Transactions'} amount={'150'} percent={'+10%'}/>
            </div>
          </div>
        </div>
      </div>
    );
}
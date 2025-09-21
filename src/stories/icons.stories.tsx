import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React, { useState } from 'react';
import {
  Ai,
  AndroidBold,
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowTiny,
  Arrow,
  Bale,
  BankCard,
  Bank,
  Bill,
  BtcGradient,
  Buy,
  Buys,
  Calcs,
  Calendar,
  Camera,
  Candlestick,
  CardByCard,
  CategoryBankConversions,
  CategoryBank,
  CategoryFinancial,
  CategoryInvestment,
  CategoryPractical,
  CategorySaiiadCheque,
  Chart,
  CheckCircle,
  Check,
  Cheque,
  Chevron,
  CloseCircle,
  Copy,
  CryptoLock,
  Danger,
  DefectivePerson,
  Download,
  EditSolid,
  Edit,
  EskenasIcon,
  Eskenas,
  Exit,
  Eye,
  FilledBarChart,
  Filter,
  FourDots,
  FullScreen,
  Gift,
  GoldStar,
  HamrahAval,
  HandPointer,
  History,
  Home,
  Info,
  Inquiry,
  Irancell,
  Link,
  List,
  Magnifier,
  MinusCopy,
  MinusCircle,
  Minus,
  Moon,
  MyPhone,
  NationalCard,
  NavArrow,
  NoData,
  NoEye,
  NormalChart,
  Paper,
  Pencil,
  PersonTwo,
  Person,
  Pickture,
  Play,
  PlusFillCopy,
  PlusFill,
  Plus,
  Promissory,
  Question,
  Reload,
  Rightel,
  Rules,
  Scanner,
  Sell,
  ServiceBankBalance,
  ServiceBankCardToDeposit,
  ServiceBankCardToIban,
  ServiceBankCheckColorStatus,
  ServiceBankChequeColorStatus,
  ServiceBankDepositToIban,
  ServiceBankElectronicPromissoryNote,
  ServiceBankGetLoan,
  ServiceBankSaiiadCheckChainInquiryTransfers,
  ServiceBankSaiiadChequeBook,
  ServiceBankSaiiadChequeChainInquiryTransfers,
  ServiceBankSaiiadChequeCheckbook,
  ServiceBankSaiiadChequeInquiryId,
  ServiceBankSaiiadCheque,
  ServiceBankSaiiadIdReceive,
  ServiceBankShahabCode,
  ServiceBankTransferMoney,
  ServiceBillElectricity,
  ServiceBillFixedLine,
  ServiceBillGas,
  ServiceBillMobile,
  ServiceBillPropertyTax,
  ServiceBillWater,
  ServiceBill,
  ServiceChargeInternetCharge,
  ServiceChargeInternetInternet,
  ServiceInquiryBankTransfer,
  ServiceInquiryCredit,
  ServiceInquiryProperty,
  ServiceInquiryTrading,
  ServiceInquiryVehicle,
  ServiceInvestmentCrowdfunding,
  ServiceInvestmentCryptocurrency,
  ServiceInvestmentGoldCoin,
  ServiceInvestmentInstantPrice,
  ServiceInvestmentMarket,
  ServiceInvestmentStuckFund,
  ServiceVehicleBikeActiveLicensePlates,
  ServiceVehicleBikeAnnualVehicleTax,
  ServiceVehicleBikeBikeFinesInquiry,
  ServiceVehicleBikeBikeTransferTax,
  ServiceVehicleBikeHighwayTollCharges,
  ServiceVehicleBikeLicenseNegativeScore,
  ServiceVehicleBikeLicensePlateHistory,
  ServiceVehicleBikeLicenseStatus,
  ServiceVehicleBikePlateHistory,
  ServiceVehicleBikeTechnicalInspection,
  ServiceVehicleBikeThirdPartyInsuranceInquiry,
  ServiceVehicleBikeTrafficPlanPermit,
  ServiceVehicleBikeVehicleDocuments,
  ServiceVehicleBikeVehicleFinesInquiry,
  ServiceVehicleBikeVehicleHistoryInquiry,
  ServiceVehicleBikeVehicleTransferTax,
  ServiceVehicleBike,
  ServiceVehicleLicenseStatus,
  Setting,
  Share,
  SimCard,
  SkenasIconName,
  SkenasName,
  Spinner,
  Star,
  Sun,
  Telegram,
  ThreeLine,
  ThreePerson,
  TradingView,
  Transactions,
  TrashSolid,
  Trash,
  TrustWallet,
  TwoFa,
  Upload,
  User,
  Video,
  WalletDark,
  Wallet,
  Warning
} from '../index';

const meta: Meta = {
  title: 'Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        height: '600px'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const IconShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState('');

  const icons = [
    { name: 'NoData', component: NoData },
    { name: 'NoEye', component: NoEye },
    { name: 'NormalChart', component: NormalChart },
    { name: 'Paper', component: Paper },
    { name: 'Pencil', component: Pencil },
    { name: 'PersonTwo', component: PersonTwo },
    { name: 'Person', component: Person },
    { name: 'Pickture', component: Pickture },
    { name: 'Play', component: Play },
    { name: 'PlusFillCopy', component: PlusFillCopy },
    { name: 'Ai', component: Ai },
    { name: 'AndroidBold', component: AndroidBold },
    { name: 'ArrowCircleDown', component: ArrowCircleDown },
    { name: 'ArrowCircleUp', component: ArrowCircleUp },
    { name: 'ArrowTiny', component: ArrowTiny },
    { name: 'Arrow', component: Arrow },
    { name: 'Bale', component: Bale },
    { name: 'BankCard', component: BankCard },
    { name: 'Bank', component: Bank },
    { name: 'Bill', component: Bill },
    { name: 'BtcGradient', component: BtcGradient },
    { name: 'Buy', component: Buy },
    { name: 'Buys', component: Buys },
    { name: 'Calcs', component: Calcs },
    { name: 'Calendar', component: Calendar },
    { name: 'Camera', component: Camera },
    { name: 'Candlestick', component: Candlestick },
    { name: 'CardByCard', component: CardByCard },
    { name: 'CategoryBankConversions', component: CategoryBankConversions },
    { name: 'CategoryBank', component: CategoryBank },
    { name: 'CategoryFinancial', component: CategoryFinancial },
    { name: 'CategoryInvestment', component: CategoryInvestment },
    { name: 'CategoryPractical', component: CategoryPractical },
    { name: 'CategorySaiiadCheque', component: CategorySaiiadCheque },
    { name: 'Chart', component: Chart },
    { name: 'CheckCircle', component: CheckCircle },
    { name: 'Check', component: Check },
    { name: 'Cheque', component: Cheque },
    { name: 'Chevron', component: Chevron },
    { name: 'CloseCircle', component: CloseCircle },
    { name: 'Copy', component: Copy },
    { name: 'CryptoLock', component: CryptoLock },
    { name: 'Danger', component: Danger },
    { name: 'DefectivePerson', component: DefectivePerson },
    { name: 'Download', component: Download },
    { name: 'EditSolid', component: EditSolid },
    { name: 'Edit', component: Edit },
    { name: 'EskenasIcon', component: EskenasIcon },
    { name: 'Eskenas', component: Eskenas },
    { name: 'Exit', component: Exit },
    { name: 'Eye', component: Eye },
    { name: 'FilledBarChart', component: FilledBarChart },
    { name: 'Filter', component: Filter },
    { name: 'FourDots', component: FourDots },
    { name: 'FullScreen', component: FullScreen },
    { name: 'Gift', component: Gift },
    { name: 'GoldStar', component: GoldStar },
    { name: 'HamrahAval', component: HamrahAval },
    { name: 'HandPointer', component: HandPointer },
    { name: 'History', component: History },
    { name: 'Home', component: Home },
    { name: 'Info', component: Info },
    { name: 'Inquiry', component: Inquiry },
    { name: 'Irancell', component: Irancell },
    { name: 'Link', component: Link },
    { name: 'List', component: List },
    { name: 'Magnifier', component: Magnifier },
    { name: 'MinusCopy', component: MinusCopy },
    { name: 'MinusCircle', component: MinusCircle },
    { name: 'Minus', component: Minus },
    { name: 'Moon', component: Moon },
    { name: 'MyPhone', component: MyPhone },
    { name: 'NationalCard', component: NationalCard },
    { name: 'NavArrow', component: NavArrow },
   
    { name: 'PlusFill', component: PlusFill },
    { name: 'Plus', component: Plus },
    { name: 'Promissory', component: Promissory },
    { name: 'Question', component: Question },
    { name: 'Reload', component: Reload },
    { name: 'Rightel', component: Rightel },
    { name: 'Rules', component: Rules },
    { name: 'Scanner', component: Scanner },
    { name: 'Sell', component: Sell },
    { name: 'ServiceBankBalance', component: ServiceBankBalance },
    { name: 'ServiceBankCardToDeposit', component: ServiceBankCardToDeposit },
    { name: 'ServiceBankCardToIban', component: ServiceBankCardToIban },
    { name: 'ServiceBankCheckColorStatus', component: ServiceBankCheckColorStatus },
    { name: 'ServiceBankChequeColorStatus', component: ServiceBankChequeColorStatus },
    { name: 'ServiceBankDepositToIban', component: ServiceBankDepositToIban },
    { name: 'ServiceBankElectronicPromissoryNote', component: ServiceBankElectronicPromissoryNote },
    { name: 'ServiceBankGetLoan', component: ServiceBankGetLoan },
    { name: 'ServiceBankSaiiadCheckChainInquiryTransfers', component: ServiceBankSaiiadCheckChainInquiryTransfers },
    { name: 'ServiceBankSaiiadChequeBook', component: ServiceBankSaiiadChequeBook },
    { name: 'ServiceBankSaiiadChequeChainInquiryTransfers', component: ServiceBankSaiiadChequeChainInquiryTransfers },
    { name: 'ServiceBankSaiiadChequeCheckbook', component: ServiceBankSaiiadChequeCheckbook },
    { name: 'ServiceBankSaiiadChequeInquiryId', component: ServiceBankSaiiadChequeInquiryId },
    { name: 'ServiceBankSaiiadCheque', component: ServiceBankSaiiadCheque },
    { name: 'ServiceBankSaiiadIdReceive', component: ServiceBankSaiiadIdReceive },
    { name: 'ServiceBankShahabCode', component: ServiceBankShahabCode },
    { name: 'ServiceBankTransferMoney', component: ServiceBankTransferMoney },
    { name: 'ServiceBillElectricity', component: ServiceBillElectricity },
    { name: 'ServiceBillFixedLine', component: ServiceBillFixedLine },
    { name: 'ServiceBillGas', component: ServiceBillGas },
    { name: 'ServiceBillMobile', component: ServiceBillMobile },
    { name: 'ServiceBillPropertyTax', component: ServiceBillPropertyTax },
    { name: 'ServiceBillWater', component: ServiceBillWater },
    { name: 'ServiceBill', component: ServiceBill },
    { name: 'ServiceChargeInternetCharge', component: ServiceChargeInternetCharge },
    { name: 'ServiceChargeInternetInternet', component: ServiceChargeInternetInternet },
    { name: 'ServiceInquiryBankTransfer', component: ServiceInquiryBankTransfer },
    { name: 'ServiceInquiryCredit', component: ServiceInquiryCredit },
    { name: 'ServiceInquiryProperty', component: ServiceInquiryProperty },
    { name: 'ServiceInquiryTrading', component: ServiceInquiryTrading },
    { name: 'ServiceInquiryVehicle', component: ServiceInquiryVehicle },
    { name: 'ServiceInvestmentCrowdfunding', component: ServiceInvestmentCrowdfunding },
    { name: 'ServiceInvestmentCryptocurrency', component: ServiceInvestmentCryptocurrency },
    { name: 'ServiceInvestmentGoldCoin', component: ServiceInvestmentGoldCoin },
    { name: 'ServiceInvestmentInstantPrice', component: ServiceInvestmentInstantPrice },
    { name: 'ServiceInvestmentMarket', component: ServiceInvestmentMarket },
    { name: 'ServiceInvestmentStuckFund', component: ServiceInvestmentStuckFund },
    { name: 'ServiceVehicleBikeActiveLicensePlates', component: ServiceVehicleBikeActiveLicensePlates },
    { name: 'ServiceVehicleBikeAnnualVehicleTax', component: ServiceVehicleBikeAnnualVehicleTax },
    { name: 'ServiceVehicleBikeBikeFinesInquiry', component: ServiceVehicleBikeBikeFinesInquiry },
    { name: 'ServiceVehicleBikeBikeTransferTax', component: ServiceVehicleBikeBikeTransferTax },
    { name: 'ServiceVehicleBikeHighwayTollCharges', component: ServiceVehicleBikeHighwayTollCharges },
    { name: 'ServiceVehicleBikeLicenseNegativeScore', component: ServiceVehicleBikeLicenseNegativeScore },
    { name: 'ServiceVehicleBikeLicensePlateHistory', component: ServiceVehicleBikeLicensePlateHistory },
    { name: 'ServiceVehicleBikeLicenseStatus', component: ServiceVehicleBikeLicenseStatus },
    { name: 'ServiceVehicleBikePlateHistory', component: ServiceVehicleBikePlateHistory },
    { name: 'ServiceVehicleBikeTechnicalInspection', component: ServiceVehicleBikeTechnicalInspection },
    { name: 'ServiceVehicleBikeThirdPartyInsuranceInquiry', component: ServiceVehicleBikeThirdPartyInsuranceInquiry },
    { name: 'ServiceVehicleBikeTrafficPlanPermit', component: ServiceVehicleBikeTrafficPlanPermit },
    { name: 'ServiceVehicleBikeVehicleDocuments', component: ServiceVehicleBikeVehicleDocuments },
    { name: 'ServiceVehicleBikeVehicleFinesInquiry', component: ServiceVehicleBikeVehicleFinesInquiry },
    { name: 'ServiceVehicleBikeVehicleHistoryInquiry', component: ServiceVehicleBikeVehicleHistoryInquiry },
    { name: 'ServiceVehicleBikeVehicleTransferTax', component: ServiceVehicleBikeVehicleTransferTax },
    { name: 'ServiceVehicleBike', component: ServiceVehicleBike },
    { name: 'ServiceVehicleLicenseStatus', component: ServiceVehicleLicenseStatus },
    { name: 'Setting', component: Setting },
    { name: 'Share', component: Share },
    { name: 'SimCard', component: SimCard },
    { name: 'SkenasIconName', component: SkenasIconName },
    { name: 'SkenasName', component: SkenasName },
    { name: 'Spinner', component: Spinner },
    { name: 'Star', component: Star },
    { name: 'Sun', component: Sun },
    { name: 'Telegram', component: Telegram },
    { name: 'ThreeLine', component: ThreeLine },
    { name: 'ThreePerson', component: ThreePerson },
    { name: 'TradingView', component: TradingView },
    { name: 'Transactions', component: Transactions },
    { name: 'TrashSolid', component: TrashSolid },
    { name: 'Trash', component: Trash },
    { name: 'TrustWallet', component: TrustWallet },
    { name: 'TwoFa', component: TwoFa },
    { name: 'Upload', component: Upload },
    { name: 'User', component: User },
    { name: 'Video', component: Video },
    { name: 'WalletDark', component: WalletDark },
    { name: 'Wallet', component: Wallet },
    { name: 'Warning', component: Warning }
  ];

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyIconName = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 16px 0'
            }}
          >
            Skenas Icons Gallery
          </h1>
        
        </div>

        {/* Search Bar */}
        <div
          style={{
            position: 'relative',
            maxWidth: '500px',
            margin: '0 auto 50px auto'
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af',
              zIndex: 1
            }}
          >
            <Magnifier style={{ width: '20px', height: '20px' }} />
          </div>
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px 16px 55px',
              fontSize: '16px',
              border: '2px solid #e5e7eb',
              borderRadius: '16px',
              outline: 'none',
              transition: 'all 0.3s ease',
              background: '#f9fafb',
              boxSizing: 'border-box'
            }}
            onFocus={e => {
              e.target.style.borderColor = '#667eea';
              e.target.style.background = 'white';
              e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={e => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.background = '#f9fafb';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Icons Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {filteredIcons.map((icon, index) => {
            const IconComponent = icon.component;
            const isRecentlyCopied = copiedIcon === icon.name;
            return (
              <div
                key={index}
                onClick={() => copyIconName(icon.name)}
                style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: `1px solid #e2e8f0`,
                  borderRadius: '20px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isRecentlyCopied ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={e => {
                  if (!isRecentlyCopied) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                    e.currentTarget.style.borderColor = '#667eea';
                  }
                }}
                onMouseLeave={e => {
                  if (!isRecentlyCopied) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }
                }}
              >
                {/* Copy Success Indicator */}
                {isRecentlyCopied && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '12px',
                      padding: '4px 8px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    ✓ copied
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 20px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  <IconComponent style={{ width: '40px', height: '40px' }} />
                </div>

                {/* Icon Name */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: '0'
                  }}
                >
                  {icon.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredIcons.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6b7280'
            }}
          >
            <div
              style={{
                fontSize: '4rem',
                marginBottom: '20px',
                opacity: '0.5'
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: '0 0 8px 0'
              }}
            >
              No icons found
            </h3>
            <p
              style={{
                fontSize: '1rem',
                margin: 0
              }}
            >
              Try adjusting your search term
            </p>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '40px',
            borderTop: '1px solid #e5e7eb',
            color: '#6b7280',
            fontSize: '0.9rem'
          }}
        >
           <p style={{ margin: 0 }}>
             ✨ Showcasing {icons.length} beautiful icons from Skenas Icons collection
           </p>
        </div>
      </div>
    </div>
  );
};

export const IconGallery: Story = {
  render: () => <IconShowcase />
};

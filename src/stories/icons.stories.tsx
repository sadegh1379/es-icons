import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import {
  ActiveLicensePlatesFill,
  AiFill,
  AndroidFill,
  AnnualVehicleTaxFill,
  ArrowCircleDownFill,
  ArrowCircleDownFillColored,
  ArrowCircleLeftFill,
  ArrowCircleRightFill,
  ArrowCircleUpFill,
  ArrowCircleUpFillColored,
  ArrowOutline,
  ArrowTinyFill,
  BalanceFill,
  BaleFillColored,
  BankCardFillColored,
  BankCategoryFill,
  BankConversionsCategoryFill,
  BankFillColored,
  BankTransferFill,
  BarChartFillColored,
  BarChartTrendOutline,
  BikeFinesInquiryFill,
  BikeLicenseStatusFill,
  BikePlateHistoryFill,
  BikeTransferTaxFill,
  BillFill,
  BorsFill,
  BtcFill,
  BtcFillColored,
  BuyFillColored,
  BuysFillColored,
  CalendarOutline,
  CameraFillColored,
  CameraOutline,
  CandlestickOutline,
  CardToDepositFill,
  CardToIbanFill,
  ChargeFill,
  CheckCircleFillColored,
  CheckCircleGradientFillColored,
  CheckCircleOutline,
  CheckColorStatusFill,
  CheckFill,
  ChequeColorStatusFill,
  ChequeFillColored,
  ChevronOutline,
  CloseCircleFillColored,
  CloseCircleOutline,
  CoinGroupFill,
  CopyOutline,
  CreditFill,
  CrowdfundingFillColored,
  CryptocurrencyFill,
  CryptoLockFillColored,
  DangerOutline,
  DefectivePersonFill,
  DepositToIbanFill,
  DocumentTimeOutline,
  DownloadFillColored,
  EditFill,
  EditOutline,
  ElectricityFillColored,
  ElectronicPromissoryNoteFill,
  EmptySearchDarkFillColored,
  EmptySearchLightFillColored,
  EskenasFillColored,
  EskenasIconFillColored,
  ExitFill,
  ExportOutline,
  EyeOutline,
  FilterFill,
  FinancialCategoryFill,
  FixedLineFillColored,
  FourDotsFill,
  FullScreenOutline,
  GasFillColored,
  GetLoanFill,
  GoldCoinFill,
  GoldFill,
  GoldSilverFillColored,
  GoldStarFillColored,
  HamrahAvalFillColored,
  HighwayTollChargesFill,
  HistoryOutline,
  HomeFill,
  ImageOutline,
  InfoCircleOutline,
  InfoFill,
  InquiryFillColored,
  InstantPriceFill,
  InternetFill,
  InvestmentCategoryFill,
  IrancellFillColored,
  LicenseNegativeScoreFill,
  LicensePlateHistoryFill,
  LinkOutline,
  ListFillColored,
  LockOutline,
  MagnifierOutline,
  MarketFill,
  MicrophoneFillColored,
  MinusCircleFill,
  MinusCircleOutline,
  MinusOutline,
  MobileFillColored,
  MobileOutline,
  MoneyTransferFill,
  MoonFillColored,
  MoonOutline,
  MyPhoneFillColored,
  NationalCardFillColored,
  NavArrowFillColored,
  NoDataFillColored,
  NoEyeOutline,
  NormalChartOutline,
  PaperOutline,
  PencilFillColored,
  PersonFill,
  PersonTwoFill,
  PhoneCallingFill,
  PlayCircleFill,
  PlayFill,
  PlusCircleOutline,
  PlusLargeOutline,
  PlusOutline,
  PracticalCategoryFill,
  ProfileCircleOutline,
  PromissoryFillColored,
  PropertyFill,
  PropertyInquiryFill,
  PropertyTaxFillColored,
  QuestionFill,
  ReceiveFill,
  ReloadOutline,
  RewardFill,
  RightelFillColored,
  SaiiadCheckChainInquiryTransfersFill,
  SaiiadChequeBookFill,
  SaiiadChequeCategoryFill,
  SaiiadChequeChainInquiryTransfersFill,
  SaiiadChequeCheckbookFill,
  SaiiadChequeFill,
  SaiiadChequeInquiryIdFill,
  SaiiadIdReceiveFill,
  ScannerFillColored,
  SellFillColored,
  SendFill,
  ServicesFill,
  SettingFill,
  ShahabCodeFill,
  ShareFill,
  ShieldCheckOutline,
  ShieldStarFill,
  SkenasFillColored,
  SkenasIconNameFillColored,
  SkenasNameFillColored,
  SpecialInvestmentPlansFill,
  SpinnerFillColored,
  StarFillColored,
  StuckFundFill,
  SunFillColored,
  SunOutline,
  SupportFill,
  TechnicalInspectionFill,
  TelegramFillColored,
  ThirdPartyInsuranceInquiryFill,
  ThreeLineOutline,
  ThreePersonFill,
  TradingFill,
  TradingViewFillColored,
  TrafficPlanPermitFill,
  TransactionsFill,
  TransferCircleFill,
  TransferMoneyFill,
  TrashFill,
  TrashOutline,
  TrustWalletFillColored,
  UnlockOutline,
  UploadFill,
  UserFill,
  VehicleBikeFill,
  VehicleDocumentsFill,
  VehicleFill,
  VehicleFinesInquiryFill,
  VehicleHistoryInquiryFill,
  VehicleLicenseStatusFill,
  VehicleTransferTaxFill,
  WalletDarkFillColored,
  WalletFill,
  WalletOutline,
  WarningFill,
  WaterFillColored,
  WorldFill
} from '../index';

const meta: Meta = {
  title: 'Icons',
  parameters: {
    layout: 'fullscreen',
    actions: {
      disable: true
    },
    controls: {
      disable: true
    },
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

type IconFilter = 'all' | 'outline' | 'fill' | 'colored';

const IconShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<IconFilter>('all');
  const [copiedIcon, setCopiedIcon] = useState('');

  const icons = [
    { name: 'ActiveLicensePlatesFill', component: ActiveLicensePlatesFill },
    { name: 'AiFill', component: AiFill },
    { name: 'AndroidFill', component: AndroidFill },
    { name: 'AnnualVehicleTaxFill', component: AnnualVehicleTaxFill },
    { name: 'ArrowCircleDownFill', component: ArrowCircleDownFill },
    { name: 'ArrowCircleDownFillColored', component: ArrowCircleDownFillColored },
    { name: 'ArrowCircleLeftFill', component: ArrowCircleLeftFill },
    { name: 'ArrowCircleRightFill', component: ArrowCircleRightFill },
    { name: 'ArrowCircleUpFill', component: ArrowCircleUpFill },
    { name: 'ArrowCircleUpFillColored', component: ArrowCircleUpFillColored },
    { name: 'ArrowOutline', component: ArrowOutline },
    { name: 'ArrowTinyFill', component: ArrowTinyFill },
    { name: 'BalanceFill', component: BalanceFill },
    { name: 'BaleFillColored', component: BaleFillColored },
    { name: 'BankCardFillColored', component: BankCardFillColored },
    { name: 'BankCategoryFill', component: BankCategoryFill },
    { name: 'BankConversionsCategoryFill', component: BankConversionsCategoryFill },
    { name: 'BankFillColored', component: BankFillColored },
    { name: 'BankTransferFill', component: BankTransferFill },
    { name: 'BarChartFillColored', component: BarChartFillColored },
    { name: 'BarChartTrendOutline', component: BarChartTrendOutline },
    { name: 'BikeFinesInquiryFill', component: BikeFinesInquiryFill },
    { name: 'BikeLicenseStatusFill', component: BikeLicenseStatusFill },
    { name: 'BikePlateHistoryFill', component: BikePlateHistoryFill },
    { name: 'BikeTransferTaxFill', component: BikeTransferTaxFill },
    { name: 'BillFill', component: BillFill },
    { name: 'BorsFill', component: BorsFill },
    { name: 'BtcFill', component: BtcFill },
    { name: 'BtcFillColored', component: BtcFillColored },
    { name: 'BuyFillColored', component: BuyFillColored },
    { name: 'BuysFillColored', component: BuysFillColored },
    { name: 'CalendarOutline', component: CalendarOutline },
    { name: 'CameraFillColored', component: CameraFillColored },
    { name: 'CameraOutline', component: CameraOutline },
    { name: 'CandlestickOutline', component: CandlestickOutline },
    { name: 'CardToDepositFill', component: CardToDepositFill },
    { name: 'CardToIbanFill', component: CardToIbanFill },
    { name: 'ChargeFill', component: ChargeFill },
    { name: 'CheckCircleFillColored', component: CheckCircleFillColored },
    { name: 'CheckCircleGradientFillColored', component: CheckCircleGradientFillColored },
    { name: 'CheckCircleOutline', component: CheckCircleOutline },
    { name: 'CheckColorStatusFill', component: CheckColorStatusFill },
    { name: 'CheckFill', component: CheckFill },
    { name: 'ChequeColorStatusFill', component: ChequeColorStatusFill },
    { name: 'ChequeFillColored', component: ChequeFillColored },
    { name: 'ChevronOutline', component: ChevronOutline },
    { name: 'CloseCircleFillColored', component: CloseCircleFillColored },
    { name: 'CloseCircleOutline', component: CloseCircleOutline },
    { name: 'CoinGroupFill', component: CoinGroupFill },
    { name: 'CopyOutline', component: CopyOutline },
    { name: 'CreditFill', component: CreditFill },
    { name: 'CrowdfundingFillColored', component: CrowdfundingFillColored },
    { name: 'CryptocurrencyFill', component: CryptocurrencyFill },
    { name: 'CryptoLockFillColored', component: CryptoLockFillColored },
    { name: 'DangerOutline', component: DangerOutline },
    { name: 'DefectivePersonFill', component: DefectivePersonFill },
    { name: 'DepositToIbanFill', component: DepositToIbanFill },
    { name: 'DocumentTimeOutline', component: DocumentTimeOutline },
    { name: 'DownloadFillColored', component: DownloadFillColored },
    { name: 'EditFill', component: EditFill },
    { name: 'EditOutline', component: EditOutline },
    { name: 'ElectricityFillColored', component: ElectricityFillColored },
    { name: 'ElectronicPromissoryNoteFill', component: ElectronicPromissoryNoteFill },
    { name: 'EmptySearchDarkFillColored', component: EmptySearchDarkFillColored },
    { name: 'EmptySearchLightFillColored', component: EmptySearchLightFillColored },
    { name: 'EskenasFillColored', component: EskenasFillColored },
    { name: 'EskenasIconFillColored', component: EskenasIconFillColored },
    { name: 'ExitFill', component: ExitFill },
    { name: 'ExportOutline', component: ExportOutline },
    { name: 'EyeOutline', component: EyeOutline },
    { name: 'FilterFill', component: FilterFill },
    { name: 'FinancialCategoryFill', component: FinancialCategoryFill },
    { name: 'FixedLineFillColored', component: FixedLineFillColored },
    { name: 'FourDotsFill', component: FourDotsFill },
    { name: 'FullScreenOutline', component: FullScreenOutline },
    { name: 'GasFillColored', component: GasFillColored },
    { name: 'GetLoanFill', component: GetLoanFill },
    { name: 'GoldCoinFill', component: GoldCoinFill },
    { name: 'GoldFill', component: GoldFill },
    { name: 'GoldSilverFillColored', component: GoldSilverFillColored },
    { name: 'GoldStarFillColored', component: GoldStarFillColored },
    { name: 'HamrahAvalFillColored', component: HamrahAvalFillColored },
    { name: 'HighwayTollChargesFill', component: HighwayTollChargesFill },
    { name: 'HistoryOutline', component: HistoryOutline },
    { name: 'HomeFill', component: HomeFill },
    { name: 'ImageOutline', component: ImageOutline },
    { name: 'InfoCircleOutline', component: InfoCircleOutline },
    { name: 'InfoFill', component: InfoFill },
    { name: 'InquiryFillColored', component: InquiryFillColored },
    { name: 'InstantPriceFill', component: InstantPriceFill },
    { name: 'InternetFill', component: InternetFill },
    { name: 'InvestmentCategoryFill', component: InvestmentCategoryFill },
    { name: 'IrancellFillColored', component: IrancellFillColored },
    { name: 'LicenseNegativeScoreFill', component: LicenseNegativeScoreFill },
    { name: 'LicensePlateHistoryFill', component: LicensePlateHistoryFill },
    { name: 'LinkOutline', component: LinkOutline },
    { name: 'ListFillColored', component: ListFillColored },
    { name: 'LockOutline', component: LockOutline },
    { name: 'MagnifierOutline', component: MagnifierOutline },
    { name: 'MarketFill', component: MarketFill },
    { name: 'MicrophoneFillColored', component: MicrophoneFillColored },
    { name: 'MinusCircleFill', component: MinusCircleFill },
    { name: 'MinusCircleOutline', component: MinusCircleOutline },
    { name: 'MinusOutline', component: MinusOutline },
    { name: 'MobileFillColored', component: MobileFillColored },
    { name: 'MobileOutline', component: MobileOutline },
    { name: 'MoneyTransferFill', component: MoneyTransferFill },
    { name: 'MoonFillColored', component: MoonFillColored },
    { name: 'MyPhoneFillColored', component: MyPhoneFillColored },
    { name: 'NationalCardFillColored', component: NationalCardFillColored },
    { name: 'NavArrowFillColored', component: NavArrowFillColored },
    { name: 'NoDataFillColored', component: NoDataFillColored },
    { name: 'NoEyeOutline', component: NoEyeOutline },
    { name: 'NormalChartOutline', component: NormalChartOutline },
    { name: 'PaperOutline', component: PaperOutline },
    { name: 'PencilFillColored', component: PencilFillColored },
    { name: 'PersonFill', component: PersonFill },
    { name: 'PersonTwoFill', component: PersonTwoFill },
    { name: 'PhoneCallingFill', component: PhoneCallingFill },
    { name: 'PlayCircleFill', component: PlayCircleFill },
    { name: 'PlayFill', component: PlayFill },
    { name: 'PlusCircleOutline', component: PlusCircleOutline },
    { name: 'PlusLargeOutline', component: PlusLargeOutline },
    { name: 'PlusOutline', component: PlusOutline },
    { name: 'PracticalCategoryFill', component: PracticalCategoryFill },
    { name: 'PromissoryFillColored', component: PromissoryFillColored },
    { name: 'PropertyFill', component: PropertyFill },
    { name: 'PropertyInquiryFill', component: PropertyInquiryFill },
    { name: 'PropertyTaxFillColored', component: PropertyTaxFillColored },
    { name: 'QuestionFill', component: QuestionFill },
    { name: 'ReceiveFill', component: ReceiveFill },
    { name: 'ReloadOutline', component: ReloadOutline },
    { name: 'RewardFill', component: RewardFill },
    { name: 'RightelFillColored', component: RightelFillColored },
    { name: 'SaiiadCheckChainInquiryTransfersFill', component: SaiiadCheckChainInquiryTransfersFill },
    { name: 'SaiiadChequeBookFill', component: SaiiadChequeBookFill },
    { name: 'SaiiadChequeCategoryFill', component: SaiiadChequeCategoryFill },
    { name: 'SaiiadChequeChainInquiryTransfersFill', component: SaiiadChequeChainInquiryTransfersFill },
    { name: 'SaiiadChequeCheckbookFill', component: SaiiadChequeCheckbookFill },
    { name: 'SaiiadChequeFill', component: SaiiadChequeFill },
    { name: 'SaiiadChequeInquiryIdFill', component: SaiiadChequeInquiryIdFill },
    { name: 'SaiiadIdReceiveFill', component: SaiiadIdReceiveFill },
    { name: 'ScannerFillColored', component: ScannerFillColored },
    { name: 'SellFillColored', component: SellFillColored },
    { name: 'SendFill', component: SendFill },
    { name: 'ServicesFill', component: ServicesFill },
    { name: 'SettingFill', component: SettingFill },
    { name: 'ShahabCodeFill', component: ShahabCodeFill },
    { name: 'ShareFill', component: ShareFill },
    { name: 'ShieldCheckOutline', component: ShieldCheckOutline },
    { name: 'ShieldStarFill', component: ShieldStarFill },
    { name: 'SkenasFillColored', component: SkenasFillColored },
    { name: 'SkenasIconNameFillColored', component: SkenasIconNameFillColored },
    { name: 'SkenasNameFillColored', component: SkenasNameFillColored },
    { name: 'SpecialInvestmentPlansFill', component: SpecialInvestmentPlansFill },
    { name: 'SpinnerFillColored', component: SpinnerFillColored },
    { name: 'StarFillColored', component: StarFillColored },
    { name: 'StuckFundFill', component: StuckFundFill },
    { name: 'SunFillColored', component: SunFillColored },
    { name: 'TechnicalInspectionFill', component: TechnicalInspectionFill },
    { name: 'TelegramFillColored', component: TelegramFillColored },
    { name: 'ThirdPartyInsuranceInquiryFill', component: ThirdPartyInsuranceInquiryFill },
    { name: 'ThreeLineOutline', component: ThreeLineOutline },
    { name: 'ThreePersonFill', component: ThreePersonFill },
    { name: 'TradingFill', component: TradingFill },
    { name: 'TradingViewFillColored', component: TradingViewFillColored },
    { name: 'TrafficPlanPermitFill', component: TrafficPlanPermitFill },
    { name: 'TransactionsFill', component: TransactionsFill },
    { name: 'TransferCircleFill', component: TransferCircleFill },
    { name: 'TransferMoneyFill', component: TransferMoneyFill },
    { name: 'TrashFill', component: TrashFill },
    { name: 'TrashOutline', component: TrashOutline },
    { name: 'TrustWalletFillColored', component: TrustWalletFillColored },
    { name: 'UnlockOutline', component: UnlockOutline },
    { name: 'UploadFill', component: UploadFill },
    { name: 'UserFill', component: UserFill },
    { name: 'VehicleBikeFill', component: VehicleBikeFill },
    { name: 'VehicleDocumentsFill', component: VehicleDocumentsFill },
    { name: 'VehicleFill', component: VehicleFill },
    { name: 'VehicleFinesInquiryFill', component: VehicleFinesInquiryFill },
    { name: 'VehicleHistoryInquiryFill', component: VehicleHistoryInquiryFill },
    { name: 'VehicleLicenseStatusFill', component: VehicleLicenseStatusFill },
    { name: 'VehicleTransferTaxFill', component: VehicleTransferTaxFill },
    { name: 'WalletDarkFillColored', component: WalletDarkFillColored },
    { name: 'WalletFill', component: WalletFill },
    { name: 'WalletOutline', component: WalletOutline },
    { name: 'WarningFill', component: WarningFill },
    { name: 'WaterFillColored', component: WaterFillColored },
    { name: 'WorldFill', component: WorldFill },
    { name: 'SupportFill', component: SupportFill },
    { name: 'ProfileCircleOutline', component: ProfileCircleOutline },
    { name: 'SunOutline', component: SunOutline },
    { name: 'MoonOutline', component: MoonOutline },
  ];

  const isColoredIcon = (name: string) =>
    name.includes('Colored') || name.includes('ColorStatus');

  const getIconType = (name: string): Exclude<IconFilter, 'all'> => {
    if (isColoredIcon(name)) return 'colored';
    if (name.includes('Outline')) return 'outline';
    return 'fill';
  };

  const filteredIcons = icons
    .filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || getIconType(icon.name) === activeFilter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (activeFilter !== 'all') return 0;
      return Number(isColoredIcon(a.name)) - Number(isColoredIcon(b.name));
    });

  const filters: { id: IconFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'outline', label: 'Outline' },
    { id: 'fill', label: 'Fill' },
    { id: 'colored', label: 'Colored' }
  ];

  const copyIconName = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => {
        setCopiedIcon('');
        const elements = document.querySelectorAll('[data-icon-card]');
        elements.forEach(el => {
          const element = el as HTMLElement;
          if (element.style.borderColor === 'rgb(255, 255, 255)') {
            element.style.borderColor = '#2a2a2a';
            element.style.transform = 'scale(1)';
            element.style.boxShadow = 'none';
          }
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000000',
        padding: '48px 32px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#ffffff'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '24px',
            borderBottom: '1px solid #2a2a2a',
            marginBottom: '48px'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}
          >
            ES Icons
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#a0a0a0'
            }}
          >
            {filteredIcons.length} icons
          </span>
        </div>

        {/* Search Bar */}
        <div
          style={{
            position: 'relative',
            maxWidth: '480px',
            marginBottom: '24px'
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#a0a0a0',
              zIndex: 1
            }}
          >
            <MagnifierOutline style={{ width: '18px', height: '18px' }} />
          </div>
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              fontSize: '0.875rem',
              border: '1px solid #2a2a2a',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              background: '#111111',
              color: '#ffffff',
              boxSizing: 'border-box'
            }}
            onFocus={e => {
              e.target.style.borderColor = '#444444';
            }}
            onBlur={e => {
              e.target.style.borderColor = '#2a2a2a';
            }}
          />
        </div>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '48px'
          }}
        >
          {filters.map(filter => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: `1px solid ${isActive ? '#ffffff' : '#2a2a2a'}`,
                  borderRadius: '999px',
                  background: isActive ? '#ffffff' : '#111111',
                  color: isActive ? '#000000' : '#a0a0a0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Icons Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '48px'
          }}
        >
          {filteredIcons.map((icon, index) => {
            const IconComponent = icon.component;
            const isRecentlyCopied = copiedIcon === icon.name;
            return (
              <div
                key={index}
                data-icon-card
                onClick={() => copyIconName(icon.name)}
                style={{
                  background: '#111111',
                  border: `1px solid ${isRecentlyCopied ? '#ffffff' : '#2a2a2a'}`,
                  borderRadius: '12px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: isRecentlyCopied ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={e => {
                  if (!isRecentlyCopied) {
                    e.currentTarget.style.borderColor = '#444444';
                    e.currentTarget.style.background = '#1a1a1a';
                  }
                }}
                onMouseLeave={e => {
                  if (!isRecentlyCopied) {
                    e.currentTarget.style.borderColor = '#2a2a2a';
                    e.currentTarget.style.background = '#111111';
                  }
                }}
              >
                {isRecentlyCopied && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: '#2a2a2a',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: '#a0a0a0'
                    }}
                  >
                    copied
                  </div>
                )}

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 16px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#2a2a2a',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                >
                  <IconComponent style={{ width: '28px', height: '28px' }} />
                </div>

                <h3
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: '#a0a0a0',
                    margin: 0,
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                    minHeight: '2.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
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
              color: '#a0a0a0'
            }}
          >
            <div
              style={{
                marginBottom: '16px',
                opacity: 0.5,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <MagnifierOutline style={{ width: '48px', height: '48px' }} />
            </div>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                margin: '0 0 8px 0',
                color: '#ffffff'
              }}
            >
              No icons found
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                margin: 0,
                color: '#a0a0a0'
              }}
            >
              Try adjusting your search term
            </p>
          </div>
        )}

        <div
          style={{
            textAlign: 'center',
            paddingTop: '32px',
            borderTop: '1px solid #2a2a2a',
            color: '#a0a0a0',
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
          }}
        >
          <p style={{ margin: 0 }}>
            {icons.length} icons · Skenas Icons collection
          </p>
        </div>
      </div>
    </div>
  );
};

export const IconGallery: Story = {
  name: 'Icon Gallery',
  render: () => <IconShowcase />
};

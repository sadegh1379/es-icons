import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useEffect, useState } from 'react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const meta: Meta<DatepickerProps> = {
  title: 'Components/WheelDatePicker',
  component: WheelDatePicker,

  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = (props: DatepickerProps) => {
  const [value, setValue] = useState(props.value || '');

  return (
    <div
      style={{
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start'
      }}
    >
      <WheelDatePicker {...props} value={value} onChange={setValue} />
    </div>
  );
};

export const InitialValue: Story = {
  args: {
    value: '1402/05/12',
    calendarType: 'jalali'
  },
  render: args => <Wrapper {...args} />
};

export const Disabled: Story = {
  args: {
    value: '1402/05/12',
    calendarType: 'jalali',
    input: {
      disabled: true
    }
  },
  render: args => <Wrapper {...args} />
};

export const InputShowError: Story = {
  args: {
    value: '1402/05/12',
    calendarType: 'jalali',
    input: {
      error: 'invalid date'
    }
  },
  render: args => <Wrapper {...args} />
};

export const MinYear: Story = {
  args: {
    minYear: 1380,
    calendarType: 'jalali'
  },
  render: args => <Wrapper {...args} />
};

export const MaxYear: Story = {
  args: {
    maxYear: 1405,
    calendarType: 'jalali'
  },
  render: args => <Wrapper {...args} />
};

export const MiladiCalendar: Story = {
  args: {
    calendarType: 'miladi'
  },
  render: args => <Wrapper {...args} />
};

export const InputLabel: Story = {
  args: {
    calendarType: 'jalali',
    input: {
      label: 'تاریخ شروع',
      placeholder: 'انتخاب کنید'
    }
  },
  render: args => <Wrapper {...args} />
};

export const CustomModal: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      title: 'انتخاب تاریخ سفارشی',
      placement: 'bottom',
      className: 'modal-class',
      rtl: true,
      closeIcon: '❌'
    }
  },
  render: args => <Wrapper {...args} />
};

export const CustomButton: Story = {
  args: {
    calendarType: 'jalali',
    button: {
      size: 'large',
      className: 'bg-blue-500 text-white py-2 px-4 rounded'
    }
  },
  render: args => <Wrapper {...args} />
};

export const ModalTitle: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      title: 'انتخاب تاریخ تولد'
    }
  },
  render: args => <Wrapper {...args} />
};

export const ModalPlacementBottom: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      placement: 'bottom'
    }
  },
  render: args => <Wrapper {...args} />
};

export const ModalPlacementBottomTitle: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      placement: 'bottom',
      title: 'تاریخ'
    }
  },
  render: args => <Wrapper {...args} />
};

export const ModalPlacementCenter: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      placement: 'center'
    }
  },
  render: args => <Wrapper {...args} />
};

export const ModalPlacementCenterTitle: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      placement: 'center',
      title: 'تاریخ'
    }
  },
  render: args => <Wrapper {...args} />
};

export const CustomCloseIcon: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      closeIcon: '🗙',
      title: 'تاریخ'
    }
  },
  render: args => <Wrapper {...args} />
};

// ********************************************************************************************
// ****************************** DisplayFormat Examples **************************************
// ********************************************************************************************

export const DisplayFormatExamples: Story = {
  render: () => {
    const [value1, setValue1] = useState('1402/05/12');
    const [value2, setValue2] = useState('1402-05-12');
    const [value3, setValue3] = useState('1402.05.12');
    const [value4, setValue4] = useState('1402 05 12');

    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3>Different Date Display Format Examples</h3>

        <div>
          <h4>Default Format (YYYY/MM/DD)</h4>
          <WheelDatePicker
            value={value1}
            onChange={setValue1}
            calendarType="jalali"
            displayFormat="default"
            input={{ label: 'Date with Default Format' }}
          />
          <p>Value: {value1}</p>
        </div>

        <div>
          <h4>Dash Format (YYYY-MM-DD)</h4>
          <WheelDatePicker
            value={value2}
            onChange={setValue2}
            calendarType="jalali"
            displayFormat="dash"
            input={{ label: 'Date with Dash Format' }}
          />
          <p>Value: {value2}</p>
        </div>

        <div>
          <h4>Dot Format (YYYY.MM.DD)</h4>
          <WheelDatePicker
            value={value3}
            onChange={setValue3}
            calendarType="jalali"
            displayFormat="dot"
            input={{ label: 'Date with Dot Format' }}
          />
          <p>Value: {value3}</p>
        </div>

        <div>
          <h4>Space Format (YYYY MM DD)</h4>
          <WheelDatePicker
            value={value4}
            onChange={setValue4}
            calendarType="jalali"
            displayFormat="space"
            input={{ label: 'Date with Space Format' }}
          />
          <p>Value: {value4}</p>
        </div>

        <div>
          <h4>Gregorian Date with Dash Format</h4>
          <WheelDatePicker
            value="2023-05-12"
            onChange={() => {}}
            calendarType="miladi"
            displayFormat="dash"
            input={{ label: 'Gregorian Date with Dash Format' }}
          />
        </div>
      </div>
    );
  }
};

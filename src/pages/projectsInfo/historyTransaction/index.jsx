import React, { Component } from "react";
import { Image, Typography, Table } from "antd";
import historyTransactionImg from "../../../components/images/projectsImages/historyTransactionImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class HistoryTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchaseDatasource: [
        {
          key: "1",
          transactionType: "Buy",
          tradeDate: "1-Jan-20",
          shares: 101,
          amountPaid: "$11111",
          acb: "$11111",
          shareBalance: 100,
          acbShare: "$111.11",
        },
        {
          key: "2",
          transactionType: "Buy",
          tradeDate: "2-Feb-20",
          shares: 22,
          amountPaid: "$2222",
          acb: "$13333",
          shareBalance: 123,
          acbShare: "$108.40",
        },
        {
          key: "3",
          transactionType: "Buy",
          tradeDate: "3-Mar-20",
          shares: 42,
          amountPaid: "$3613",
          acb: "$16946",
          shareBalance: 165,
          acbShare: "$102.70",
        },
        {
          key: "4",
          transactionType: "Buy",
          tradeDate: "4-Apr-20",
          shares: 79,
          amountPaid: "$7132",
          acb: "$24078",
          shareBalance: 244,
          acbShare: "$98.680",
        },
      ],
      sellDatasource: [
        {
          key: "5",
          transactionType: "Buy",
          tradeDate: "4-Apr-20",
          shares: 79,
          amountPaid: "$7132",
          acb: "$24078",
          shareBalance: 244,
          acbShare: "$98.680",
          capitalGainsLoss: "$0",
        },
        {
          key: "6",
          transactionType: "Sell",
          tradeDate: "2-May-20",
          shares: 42,
          amountPaid: "$5123",
          acb: "$19933.44",
          shareBalance: 202,
          acbShare: "$98.680",
          capitalGainsLoss: "$978.44",
        },
        {
          key: "7",
          transactionType: "Buy",
          tradeDate: "3-June-20",
          shares: 50,
          amountPaid: "$2964",
          acb: "$14999.44",
          shareBalance: 152,
          acbShare: "$98.681",
          capitalGainsLoss: "-$1970",
        },
      ],
    };

    this.purchaseColumns = [
      {
        title: "Trade date",
        dataIndex: "tradeDate",
      },
      {
        title: "Transaction Type",
        dataIndex: "transactionType",
      },
      {
        title: "shares",
        dataIndex: "shares",
      },
      {
        title: "Amount Paid",
        dataIndex: "amountPaid",
      },
      {
        title: "ACB",
        dataIndex: "acb",
      },
      {
        title: "Share Balance",
        dataIndex: "shareBalance",
      },
      {
        title: "ACB/Share",
        dataIndex: "acbShare",
      },
    ];
    this.sellColumns = [
      {
        title: "Trade date",
        dataIndex: "tradeDate",
      },
      {
        title: "Transaction Type",
        dataIndex: "transactionType",
      },
      {
        title: "shares",
        dataIndex: "shares",
      },
      {
        title: "Amount Paid",
        dataIndex: "amountPaid",
      },
      {
        title: "ACB",
        dataIndex: "acb",
      },
      {
        title: "Share Balance",
        dataIndex: "shareBalance",
      },
      {
        title: "ACB/Share",
        dataIndex: "acbShare",
      },
      {
        title: "Capital Gains/Loss",
        dataIndex: "capitalGainsLoss",
      },
    ];
  }
  render() {
    return (
      <div className="historyTransaction-homePage">
        <NavigationBar />
        <div className="historyTransaction-header">History Transaction List</div>
        <div className="historyTransaction-content">
          <Image src={historyTransactionImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              A transaction list is insert into the program. The program will order all the transactions from early to late. Then the program will calculate the ACB, Share Balance, ACB/Share and
              Capital Gains/Loss. Additionally, The CGL of each year will be calculated. Finally, everything will be returned.
            </Paragraph>
            <Title level={3}>Purchasing shares</Title>
            <Table pagination={false} columns={this.purchaseColumns} dataSource={this.state.purchaseDatasource} />
            <Paragraph>
              <Text strong>ACB: </Text>
              In order to calculate ACB on a Buy, the total amount paid for the purchases are accumulated.For instance, the buyer’s purchase on 2-Feb-20 of 22 shares required him to pay $2222. The ACB
              after this purchase is the amount paid on 1-Jan-20 ($11111) plus the amount paid on 2-Feb-20 ($2222) ,which is $13333.
            </Paragraph>
            <Paragraph>
              <Text strong>Shared Balance: </Text>
              In order to calculate the share balance on a buy. The share balance from the previous transaction is added with the number of shares purchased with the new transaction. For instance, the
              share balance on 2-Feb-20 is the shares on 1-Jan-20 (101) plus the shares on 2-Feb-20 (22), which is 101+22=123.
            </Paragraph>
            <Paragraph>
              <Text strong>ACB/Share: </Text>
              In order to calculate the ACB/Share, the ACB is divided by Share Balance. For instance, the ACB/Share on 2-Feb-20 is 133333/123=108.40.
            </Paragraph>
            <Title level={3}>Selling Shares: </Title>
            <Table pagination={false} columns={this.sellColumns} dataSource={this.state.sellDatasource} />
            <Paragraph>
              <Text strong>ACB: </Text>
              In order to calculate ACB on a sell, the ACB of the previous transaction is subtracted by the shares of the current transaction times the amount paid of the current transaction. For
              instance, the ACB on 2-May-20 is the ACB on 4-Apr-20 ($24078) minus the shares on 2-Feb-20 (42) times the ACB/Share on 4-Apr-20 ($98.68), which is $24078 - (42*$98.68) = $19933.44
            </Paragraph>
            <Paragraph>
              <Text strong>Share Balance: </Text>
              In order to calculate the share balance, the previous share balance minus the number of shares sold. For instance, the share balance on 2-May-20 is 244 - 42 = 202.
            </Paragraph>
            <Paragraph>
              <Text strong>ACB/Share: </Text>
              In order to calculate the ACB/Share, the ACB is divided by Share Balance. For instance, the ACB/Share on 2-May-20 is 19933.44/202=98.680.
            </Paragraph>
            <Paragraph>
              <Text strong>Capital Gains/Loss: </Text>
              in order to calculate the Capital Gains/Loss, the amount paid in the current transaction is subtracted by shares of the current transaction times ACB/Share of the previous transaction.
              For instance, the Capital Gains/Loss on 2-May-20 is $5123 - (42 * $98.68) = $978.44¸
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default HistoryTransaction;

import { faker } from "@faker-js/faker/locale/vi";

function createRandomUser() {
  return {
    user_id: faker.datatype.uuid(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    subscriptionTier: faker.helpers.arrayElement([
      "Thường",
      "Vàng",
      "Bạc",
      "Kim Cương",
    ]),
  };
}

function createRandomProduct() {
  return {
    product_id: faker.datatype.uuid(),
    brand: faker.commerce.product(),
    title: faker.commerce.productName(),
    price: faker.finance.amount(10, 10000, 0) * 1000,
    thumbnail: faker.image.abstract(1234, 2345),
    desc: faker.commerce.productDescription(),
    quantity: faker.finance.amount(1, 1000, 0),
  };
}

function createRandomComment() {
  return {
    comment_id: faker.datatype.uuid(1),
    product_id: faker.datatype.uuid(2),
    account_id: faker.datatype.uuid(3),
    admin_id: faker.datatype.uuid(4),
    updated_at: faker.date.past(),
    comment: faker.git.commitMessage(),
    status: faker.helpers.arrayElement(["Đã phản hồi", "Chưa phản hồi"]),
  };
}

function createRandomNews() {
  return {
    news_id: faker.datatype.uuid(),
    title: faker.lorem.sentence(5),
    content: faker.lorem.paragraphs(),
    thumbnail: faker.image.abstract(1234, 2345),
  };
}

function createRandomOrderDetail(){
  return {
    product_id:faker.datatype.uuid(),
    quantity: faker.finance.amount(1, 10, 0),
    total_money: faker.finance.amount(10, 10000, 0) * 1000,
  }
}

function createRandomOrder() {
  return {
    order_id: faker.datatype.uuid(),
    customer_id: faker.datatype.uuid(),
    order_date: faker.date.past(),
    status: faker.helpers.arrayElement(["Đã phản hồi", "Chưa phản hồi"]),
    total_order_money: faker.finance.amount(10, 100000, 0) * 1000,
    order_items: new Array(3).fill(null).map(() => createRandomOrderDetail())
  };
}

export const UserData = new Array(100).fill(null).map(() => createRandomUser());
export const ProductData = new Array(100)
  .fill(null)
  .map(() => createRandomProduct());
export const CommentData = new Array(100)
  .fill(null)
  .map(() => createRandomComment());
export const NewsData = new Array(100).fill(null).map(() => createRandomNews());
export const OrderData = new Array(100).fill(null).map(() => createRandomOrder());



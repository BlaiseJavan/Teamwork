import moment from 'moment';
import uuid from 'uuid/v1';
import db from '../config/connection';

class Article {
  constructor(title, article, tags, employeeId) {
    this.id = uuid();
    this.title = title;
    this.article = article;
    this.tags = tags;
    this.report = 'appropriate';
    this.employeeId = employeeId;
    this.createdOn = moment().format('YYYY-MM-DD');
  }

  static async createArticleTable() {
    const result = await db.query(`
    CREATE TABLE IF NOT EXISTS article (
      id UUID PRIMARY KEY,
      title  text,
      article  text,
      employeeId UUID ,
      tags text,
      report text,
      createdOn date,
      foreign key(employeeId) REFERENCES employee ON DELETE CASCADE
          )`);
    return result;
  }

  static async createArticle(data) {
    const result = await db.query(`INSERT INTO article(id, title, article, employeeId, tags, report, createdOn) VALUES (
        '${data.id}',
        '${data.title}',
        '${data.article}',
        '${data.employeeId}',
        '${data.tags}',
        '${data.report}',
        '${data.createdOn}'
        ) returning *;
      `);

    return result;
  }
}

export default Article;

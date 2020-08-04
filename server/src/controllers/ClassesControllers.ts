import { Request, Response } from "express";

import convertHourToMinutes from "./../utils/convertHourToMinutes";
import db from "../database/connection";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  public async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx("users")
        .insert({
          name,
          avatar,
          whatsapp,
          bio,
        })
        .returning("id");

      const [class_id] = await trx("classes")
        .insert({
          subject,
          cost,
          user_id,
        })
        .returning("id");

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected erro while creating new class",
      });
    }
  }
}

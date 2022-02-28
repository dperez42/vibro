
----Setting time zone-----
SET TIMEZONE='Europe/Madrid';

CREATE TABLE IF NOT EXISTS data_sensors
(
    id_sensor int,
    time_stamp timestamp with time zone,
    ax  double precision,
    ay  double precision,
    az  double precision,
    delta_time double precision,
    ind smallint
);
--- first data
INSERT INTO data_sensors(id_sensor, time_stamp, ax, ay, az, delta_time, ind)
VALUES (999999, now(), 12.3, 4.5, 6.7, 100000, 1);
INSERT INTO data_sensors(id_sensor, time_stamp, ax, ay, az, delta_time, ind)
VALUES (999999, now(), 12.3, 4.5, 6.7, 200000, 2);

CREATE OR REPLACE FUNCTION public.parse_json_data(
json)
RETURNS int
LANGUAGE 'plpgsql'
COST 100
VOLATILE 
AS $BODY$
BEGIN
	insert into data_sensors(id_sensor, time_stamp, ax, ay, az, delta_time, ind)
	select x.id_sensor, now(), x.ax , x.ay, x.az, x.delta_time, x.ind from json_to_recordset($1) x 
	(
		id_sensor int,
		time_stamp timestamp with time zone,
		ax  double precision,
		ay  double precision,
		az  double precision,
		delta_time double precision,
		ind smallint
	);
    	RETURN 1;       
   END;
$BODY$;

--SELECT public.parse_json_data('[{"id_sensor": "1", "ax": "20", "ay": "10","az": "30", "delta_time": "10000", "ind":"99"}]');

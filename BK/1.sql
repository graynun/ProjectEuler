delimiter $$
CREATE procedure euler1(IN var1 INT)
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE a INT DEFAULT 0;
  WHILE (i < var1) DO 
    IF i%3=0 OR i%5=0 THEN
      SET a=a+i;
    END IF;
    SET i=i+1;
  END WHILE;
  SELECT a;
END;
$$

CALL euler1(1000);

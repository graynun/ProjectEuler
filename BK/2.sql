delimiter $$
CREATE PROCEDURE euler2(IN var1 INT)
BEGIN
  DECLARE total INT DEFAULT 0;
  DECLARE sum INT DEFAULT 0;
  DECLARE a INT DEFAULT 0;
  DECLARE b INT DEFAULT 1;

  WHILE (sum < var1) DO 

    SET sum = a+b;
    SET a = b;
    SET b = sum;

    IF sum%2=0 THEN
      SET total = total+sum;
    END IF;

  END WHILE;

  SELECT total;
END;
$$

CALL euler2(4000000);
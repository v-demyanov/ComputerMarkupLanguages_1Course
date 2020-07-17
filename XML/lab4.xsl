<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
   <body>
    <table border="1">
    <tr bgcolor="rgb(243, 118, 239)">
      <td>Фамилия</td>
      <td>Средний балл</td>
      <td>Год рождения</td>
    </tr>
    <xsl:for-each select="LIST/PERSON">
    <xsl:sort select="YEAR"/>
    <xsl:choose>
      <xsl:when test="AVERAGE &lt; 6">
      <tr bgcolor="red">
        <td><xsl:value-of select="SURNAME"/></td>
        <td><xsl:value-of select="AVERAGE"/></td>
        <td><xsl:value-of select="YEAR"/></td>
      </tr>
      </xsl:when>
      <xsl:when test="AVERAGE = 6">
      <tr bgcolor="green">
        <td><xsl:value-of select="SURNAME"/></td>
        <td><xsl:value-of select="AVERAGE"/></td>
        <td><xsl:value-of select="YEAR"/></td>
      </tr>
      </xsl:when>
      <xsl:otherwise>
      <tr>
        <td><xsl:value-of select="SURNAME"/></td>
        <td><xsl:value-of select="AVERAGE"/></td>
        <td><xsl:value-of select="YEAR"/></td>
      </tr>
      </xsl:otherwise>
    </xsl:choose>
    </xsl:for-each>
    </table>
   </body>
</html>
</xsl:template>

</xsl:stylesheet> 
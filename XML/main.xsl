<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
   <html>
   <body>
    <div style="border: solid 2px blue; width: 300px; padding: 10px 10px 0 10px">
    <xsl:for-each select="LIST/UNIVERSITY">
     <table border="1" cellspacing="none" style="margin-bottom:10px; width:300px; text-align:center">
       <tr><td style="border-bottom:2px"><xsl:value-of select="NAME"/></td></tr>
       <tr><td style="border-bottom:2px"><xsl:value-of select="SPECIALIZATION"/></td></tr>
       <tr><td style="border-bottom:2px"><xsl:value-of select="RATE"/></td></tr>
       <tr><td style="border-bottom:2px"><xsl:value-of select="PLAN"/></td></tr>
       <tr><td><xsl:value-of select="CITY"/></td></tr>
     </table>
     </xsl:for-each>
    </div>
   </body>
   </html>
</xsl:template>

</xsl:stylesheet> 